import type { AppProps } from 'next/app';
import Head from 'next/head';
import { DefaultSeo } from 'next-seo';

import { SidebarProvider } from '@contexts/SidebarContext';

import { Footer } from '@components/Footer';
import { Header } from '@components/Header';

import { SEO } from '@seo/next-seo.config';

import 'tailwindcss/tailwind.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SidebarProvider>
      <Head>
        <style>
          {`
            input[type='search']::-webkit-search-decoration,
            input[type='search']::-webkit-search-cancel-button,
            input[type='search']::-webkit-search-results-button,
            input[type='search']::-webkit-search-results-decoration {
              display: none;
            }
          `}
        </style>
      </Head>

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
