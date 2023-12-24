import { NextApiRequest, NextApiResponse } from 'next';

import sgMail from '@sendgrid/mail';

export type Body = {
  name: string;
  email: string;
  telephone: string;
  state: string;
  city: string;
  area: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { name, telephone, area, city, email, state } = req.body as Body;

  const { SENDGRID_API_KEY, SENDER_EMAIL, RECEIVER_EMAIL } = process.env;

  if (!SENDGRID_API_KEY || !SENDER_EMAIL || !RECEIVER_EMAIL) {
    return res.status(500).json({ error: 'Missing env variables' });
  }

  if (!name || !telephone || !area || !city || !email || !state) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  sgMail.setApiKey(SENDGRID_API_KEY);

  const msg = {
    to: RECEIVER_EMAIL,
    from: SENDER_EMAIL,
    subject: `Prestador - ${name} (${area})`,
    text: `
      Nome: ${name}
      Email: ${email}
      Telefone: ${telephone}
      Estado: ${state}
      Cidade: ${city}
      Área de atuação: ${area}
    `,
  };

  try {
    const [{ statusCode }] = await sgMail.send(msg);
    return res.status(statusCode).json({
      message: 'Success',
      statusCode,
    });
  } catch (error) {
    return res.status(500).json({ error: error as Error });
  }
}
