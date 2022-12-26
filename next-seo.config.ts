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
};

export default config;
