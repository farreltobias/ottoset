import type { AppProps } from 'next/app';
import dynamic from 'next/dynamic';
import { DefaultSeo } from 'next-seo';
import SEO from 'next-seo.config';

import { SidebarProvider } from '@contexts/SidebarContext';

import { DefaultJsonLd } from '@components/DefaultJsonLd';

import 'tailwindcss/tailwind.css';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/globals.css';

const Header = dynamic(() =>
  import('@components/Header').then(({ Header }) => Header),
);
const Footer = dynamic(() =>
  import('@components/Footer').then(({ Footer }) => Footer),
);

const PrismicProvider = dynamic(() =>
  import('@contexts/PrismicProvider').then(
    ({ PrismicProvider }) => PrismicProvider,
  ),
);

function MyApp({ Component, pageProps }: AppProps) {
  const siteURL = process.env.NEXT_PUBLIC_SITE_URL || 'https://ottoset.com.br';
  const lastReviewed =
    process.env.NEXT_PUBLIC_BUILD_DATE || new Date('2021-09-01').toISOString();

  return (
    <PrismicProvider>
      <SidebarProvider>
        <DefaultSeo {...SEO} />
        <DefaultJsonLd siteURL={siteURL} lastReviewed={lastReviewed} />

        <Header />
        <main className="pt-[7.5rem] sm:pt-[7.75rem] lg:pt-[9.5rem] xl:pt-[9.75rem]">
          <Component {...pageProps} />
        </main>
        <Footer />
      </SidebarProvider>
    </PrismicProvider>
  );
}

export default MyApp;
