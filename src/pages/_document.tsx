import Document, { Head, Html, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt" className="h-full">
        <Head>
          <meta charSet="utf-8" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@500;600;700&family=Montserrat:wght@400;500;700;800&display=swap"
            rel="stylesheet"
          />
          <link rel="icon" href="/favicon.svg" type="svg" />
        </Head>

        <body className="font-body bg-primary-100">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
