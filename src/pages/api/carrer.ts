import { NextApiRequest, NextApiResponse } from 'next';

import formidable, { Fields, Files, IncomingForm } from 'formidable';
import { readFileSync } from 'fs';

import sgMail from '@sendgrid/mail';

export type FormRequest = {
  name: string;
  email: string;
  telephone: string;
  state: string;
  city: string;
  curriculum: File[];
  message: string;
};

type Body = {
  career: string;
} & Omit<FormRequest, 'curriculum'>;

type IFiles = {
  [file: string]: formidable.File;
} & Files;

type FormData = {
  files: IFiles;
  fields: Fields;
};

export const config = {
  api: {
    bodyParser: false,
  },
};

const getFilesFromForm = (req: NextApiRequest) =>
  new Promise<FormData>((resolve, reject) => {
    const form = new IncomingForm();

    form.parse(req, (err, fields, files) => {
      if (err) return reject(err);
      return resolve({ fields, files: files as IFiles });
    });
  });

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { fields, files } = await getFilesFromForm(req);

  const { career, city, email, message, name, state, telephone } =
    fields as Body;

  const content = readFileSync(files.curriculum.filepath).toString('base64');

  const { SENDGRID_API_KEY, SENDER_EMAIL, RECEIVER_EMAIL } = process.env;

  if (!SENDGRID_API_KEY || !SENDER_EMAIL || !RECEIVER_EMAIL) {
    return res.status(500).json({ error: 'Missing env variables' });
  }

  if (!message || !name || !telephone || !email || !state || !city) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  sgMail.setApiKey(SENDGRID_API_KEY);

  const msg: sgMail.MailDataRequired = {
    to: RECEIVER_EMAIL,
    from: SENDER_EMAIL,
    subject: `${career} - ${name}`,
    text: `
      Nome: ${name}
      Telefone: ${telephone}
      Mensagem: ${message}
      Cidade: ${city}
      Estado: ${state}
      Email: ${email}
    `,
    attachments: [
      {
        content,
        filename: `${name} currículo.pdf`,
        type: 'application/pdf',
        disposition: 'attachment',
      },
    ],
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
