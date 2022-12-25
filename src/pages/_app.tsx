import type { AppProps } from 'next/app';
import dynamic from 'next/dynamic';
import { DefaultSeo } from 'next-seo';
import SEO from 'next-seo.config';

import { SidebarProvider } from '@contexts/SidebarContext';

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
  return (
    <PrismicProvider>
      <SidebarProvider>
        <DefaultSeo {...SEO} />

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
