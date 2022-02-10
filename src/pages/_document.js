import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getStaticProps(ctx) {
    const initialProps = await Document.getStaticProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link href="https://fonts.googleapis.com/css2?family=Barlow:wght@300;400;600;700&family=Open+Sans:wght@300;400;600;700&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;