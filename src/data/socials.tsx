import Facebook from '@public/social/facebook.svg';
import Instagram from '@public/social/instagram.svg';
import LinkedIn from '@public/social/linkedin.svg';

import { facebook, instagram, linkedin } from './static/ottoset';

export const socials = [
  {
    type: 'instagram',
    href: `https://www.instagram.com/${instagram}`,
    Icon: Instagram,
  },
  {
    type: 'facebook',
    href: `https://www.facebook.com/${facebook}`,
    Icon: Facebook,
  },
  {
    type: 'linkedin',
    href: `https://www.linkedin.com/${linkedin}`,
    Icon: LinkedIn,
  },
];
