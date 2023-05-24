import Document, { Html, Head, Main, NextScript } from "next/document";
import { createResolver } from "next-slicezone/resolver";
import { repoName } from "../prismic-configuration";

export default class extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    await createResolver();
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <script
            async
            defer
            src={`//static.cdn.prismic.io/prismic.js?repo=${repoName}&new=true`}
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
