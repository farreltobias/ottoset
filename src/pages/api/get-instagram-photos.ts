import { NextApiRequest, NextApiResponse } from 'next';

type Data = {
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

type InstaResponse = {
  data: Data[];
  paging: Paging;
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

  const { data, paging } = (await response.json()) as InstaResponse;

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
  const { limit } = (req.query as { limit: string }) || { limit: '10' };

  const URL = 'https://graph.instagram.com/v15.0/me/media';
  const FIELDS = ['id', 'media_type', 'media_url', 'timestamp'];

  const { INSTAGRAM_ACCESS_TOKEN } = process.env;

  if (!INSTAGRAM_ACCESS_TOKEN) {
    return res
      .status(500)
      .json({ error: 'Missing Instagram access token', data: [] });
  }

  const query = new URLSearchParams({
    fields: FIELDS.join(','),
    access_token: INSTAGRAM_ACCESS_TOKEN,
    limit,
  }).toString();

  const images = await fetchImages([], `${URL}?${query}`, Number(limit));

  return res.status(200).json({ data: images });
}
