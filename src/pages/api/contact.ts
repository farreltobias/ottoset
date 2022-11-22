import { NextApiRequest, NextApiResponse } from 'next';

import sgMail from '@sendgrid/mail';

export type Body = {
  name: string;
  telephone: string;
  service: string;
  message: string;
  privacy: boolean;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { message, name, privacy, service, telephone } = req.body as Body;

  const { SENDGRID_API_KEY, SENDER_EMAIL, RECEIVER_EMAIL } = process.env;

  if (!SENDGRID_API_KEY || !SENDER_EMAIL || !RECEIVER_EMAIL) {
    return res.status(500).json({ error: 'Missing env variables' });
  }

  if (!privacy) {
    return res.status(400).json({ message: 'Privacy policy not accepted' });
  }

  if (!message || !name || !service || !telephone) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  sgMail.setApiKey(SENDGRID_API_KEY);

  const msg = {
    to: RECEIVER_EMAIL,
    from: SENDER_EMAIL,
    subject: `Contato - ${name} (${service})`,
    text: `
      Nome: ${name}
      Telefone: ${telephone}
      Serviço: ${service}
      Mensagem: ${message}
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
