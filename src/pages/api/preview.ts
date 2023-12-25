import { NextApiRequest, NextApiResponse } from 'next';

import { redirectToPreviewURL, setPreviewData } from '@prismicio/next';

import { createClient } from 'src/prismicio';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const client = createClient({ req });

  setPreviewData({ req, res });

  await redirectToPreviewURL({ req, res, client });
}
