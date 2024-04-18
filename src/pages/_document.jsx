import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta
          name="description"
          content="Data Science, Data Analytics, Data Management"
        />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <link rel="manifest" href="/site.webmanifest?v=4" crossOrigin="use-credentials" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
