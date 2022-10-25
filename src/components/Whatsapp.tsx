import WhatsappIcon from '@public/social/whatsapp.svg';

import { whatsapp } from '@data/static/ottoset';

import { Link } from './Link';
import { Caps } from './Texts';

export const Whatsapp: React.FC = () => (
  <Link
    href={`https://wa.me/${whatsapp}`}
    target="_blank"
    rel="noreferrer"
    className="w-fit py-3 px-5 rounded-full shadow-md bg-[#25D366] hover:bg-[#128C7E]"
  >
    <WhatsappIcon height={24} width={24} color="white" className="mr-2" />
    <Caps>Fale Conosco</Caps>
  </Link>
);
