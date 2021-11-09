import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;1,300&display=swap"
            rel="stylesheet"
          />
          <link
            rel="icon"
            href="https://github.githubassets.com/favicons/favicon.png"
          />
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
