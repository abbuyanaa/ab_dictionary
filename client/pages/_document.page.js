import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

class CustomDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <meta property="og:site_name" content="AB DICATIONARY" />
          {/* <meta property="og:url" content="" /> */}
          <meta property="og:type" content="DICTIONARY" />
          <meta property="og:title" content="AB DICTIONARY" />
          <meta property="og:description" content="Let's together learn foreign languages" />
          {/* <meta property="og:image" content="/images/index/sample0.png" /> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
