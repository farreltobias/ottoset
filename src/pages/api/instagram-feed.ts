import { NextApiRequest, NextApiResponse } from 'next';

export type Data = {
  id: string;
  media_type: string;
  media_url: string;
  timestamp: string;
};

type Paging = {
  cursors: {
    before: string;
    after: string;
  };
  next: string;
};

type Error = {
  message: string;
  type: string;
  is_transient: boolean;
  code: number;
  error_subcode: number;
  error_user_title: string;
  error_user_msg: string;
  fbtrace_id: string;
};

type InstaResponse = {
  data: Data[];
  paging: Paging;
  error?: Error;
};

export type Response = {
  data: Data[];
  error?: string;
};

const fetchImages = async (
  accumulator: Data[],
  url: string,
  limit: number,
): Promise<Data[]> => {
  const response = await fetch(url);

  const { data, paging, error } = (await response.json()) as InstaResponse;

  if (error) {
    throw new Error(error.message);
  }

  const images = data.reduce((acc, media) => {
    if (media.media_type === 'IMAGE') {
      acc.push(media);
    }

    return acc;
  }, accumulator);

  if (images.length < limit && paging.next) {
    const nextImages = await fetchImages(images, paging.next, limit);

    return nextImages;
  }

  return images.slice(0, limit);
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Response>,
) {
  const limit = Number(req.query?.limit || 10);

  const URL = 'https://graph.instagram.com/v15.0/me/media';
  const FIELDS = ['id', 'media_type', 'media_url', 'timestamp'];

  const { INSTAGRAM_ACCESS_TOKEN } = process.env;

  if (!INSTAGRAM_ACCESS_TOKEN) {
    throw new Error('Missing Instagram Access Token');
  }

  const query = new URLSearchParams({
    fields: FIELDS.join(','),
    access_token: INSTAGRAM_ACCESS_TOKEN,
    limit: limit.toString(),
  }).toString();

  let images = [];

  try {
    images = await fetchImages([], `${URL}?${query}`, limit);
  } catch (error) {
    return res.status(500).json({ error: (error as Error).message, data: [] });
  }

  return res.status(200).json({ data: images });
}
