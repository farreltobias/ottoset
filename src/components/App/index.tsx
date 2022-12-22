import type { AppProps } from 'next/app';
import dynamic from 'next/dynamic';
import { DefaultSeo } from 'next-seo';

import { SidebarProvider } from '@contexts/SidebarContext';

import { SEO } from '@seo/next-seo.config';

const Header = dynamic(() =>
  import('@components/Header').then(({ Header }) => Header),
);
const Footer = dynamic(() =>
  import('@components/Footer').then(({ Footer }) => Footer),
);

export const App = ({ Component, pageProps }: AppProps) => (
  <SidebarProvider>
    <DefaultSeo {...SEO} />

    <Header />
    <main className="pt-[7.5rem] sm:pt-[7.75rem] lg:pt-[9.5rem] xl:pt-[9.75rem]">
      <Component {...pageProps} />
    </main>
    <Footer />
  </SidebarProvider>
);
