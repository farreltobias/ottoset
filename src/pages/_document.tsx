import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="pt" className="h-full">
      <Head>
        <meta charSet="utf-8" />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne&family=Inter:wght@400;500;600;700&family=Montserrat:wght@400;500;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>

      <body className="font-body h-full children:h-full">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
