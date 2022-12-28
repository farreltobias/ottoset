import { DefaultSeoProps } from 'next-seo';

const config: DefaultSeoProps = {
  defaultTitle: 'Ottoset Energy',
  titleTemplate: '%s | Ottoset Energy',
  themeColor: '#FF6C0E',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://www.ottoset.com.br/',
    siteName: 'Ottoset Energy',
  },
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/favicon.ico',
    },
  ],
  additionalMetaTags: [
    {
      name: 'google-site-verification',
      content: 'MFR03KFcayQjduI3PHU1XDpRVM03yenhTmrw7kQj4_4',
    },
  ],
};

export default config;
