import type { AppProps } from 'next/app';
import Link from 'next/link';
import { DefaultSeo } from 'next-seo';

import { PrismicPreview } from '@prismicio/next';
import { JSXMapSerializer, PrismicProvider } from '@prismicio/react';

import { SidebarProvider } from '@contexts/SidebarContext';

import { Footer } from '@components/Footer';
import { Header } from '@components/Header';
import { Text, Title } from '@components/Texts';

import { SEO } from '@seo/next-seo.config';

import { repositoryName } from '../../prismicio';

import 'tailwindcss/tailwind.css';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/globals.css';

const richTextComponents: JSXMapSerializer = {
  heading1: ({ children }) => (
    <Title variant="h3" largeVariant="h1" center>
      {children}
    </Title>
  ),
  heading2: ({ children }) => (
    <Title
      as="h2"
      variant="h4"
      largeVariant="h3"
      className="text-center mb-6 lg:mb-8"
    >
      {children}
    </Title>
  ),
  paragraph: ({ children }) => (
    <Text variant="p2" className="text-center mb-6 lg:mb-10">
      {children}
    </Text>
  ),
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PrismicProvider
      internalLinkComponent={({ ...props }) => <Link {...props} />}
      richTextComponents={richTextComponents}
    >
      <PrismicPreview repositoryName={repositoryName}>
        <SidebarProvider>
          <DefaultSeo {...SEO} />

          <Header />
          <main className="pt-[7.5rem] sm:pt-[7.75rem] lg:pt-[9.5rem] xl:pt-[9.75rem]">
            <Component {...pageProps} />
          </main>
          <Footer />
        </SidebarProvider>
      </PrismicPreview>
    </PrismicProvider>
  );
}

export default MyApp;
