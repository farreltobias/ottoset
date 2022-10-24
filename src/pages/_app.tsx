import type { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';

import 'tailwindcss/tailwind.css';

import { SidebarProvider } from '@contexts/SidebarContext';

import { Header } from '@components/Header';
import { Footer } from '@components/Footer';

import { SEO } from '@seo/next-seo.config';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SidebarProvider>
      <DefaultSeo {...SEO} />

      <Header />
      <div className="pt-[7.5rem] sm:pt-[7.75rem] lg:pt-[9.5rem] xl:pt-[9.75rem]">
        <Component {...pageProps} />
      </div>
      <Footer />
    </SidebarProvider>
  );
}

export default MyApp;
