import WhatsappIcon from '@public/social/whatsapp.svg';

import information from '@utils/infomation';

import { Link } from './Link';
import { Caps } from './Text/titles';

export const Whatsapp: React.FC = () => {
  return (
    <Link
      href={`https://wa.me/${information.whatsapp}`}
      target="_blank"
      rel="noreferrer"
      className="w-fit py-3 px-5 rounded-full shadow-md bg-[#25D366] hover:bg-[#128C7E]"
    >
      <WhatsappIcon size={24} color="white" className="mr-2" />
      <Caps>Fale Conosco</Caps>
    </Link>
  );
};
