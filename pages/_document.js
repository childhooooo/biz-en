import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet, createGlobalStyle } from 'styled-components';
import { view } from 'unflexible-ui-legacy';
import { color, font } from 'lib/config';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(
              <>
                <GlobalStyle />
                <App {...props} />
              </>
            )
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <script dangerouslySetInnerHTML={{ __html: `` }}></script>
          <link rel="apple-touch-icon" sizes="180x180" href={view.url('apple-touch-icon.png')} />
          <link rel="icon" type="image/png" sizes="32x32" href={view.url('favicon-32x32.png')} />
          <link rel="icon" type="image/png" sizes="16x16" href={view.url('favicon-16x16.png')} />
          <link rel="manifest" href={view.url('site.webmanifest')} />
          <link rel="mask-icon" href={view.url('safari-pinned-tab.svg')} color="#239439" />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="theme-color" content="#ffffff" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link href="https://fonts.googleapis.com/css2?family=Lato:wght@100&family=M+PLUS+Rounded+1c:wght@400&display=swap" rel="stylesheet" />
        </Head>
        <body id="myapp">
          <noscript dangerouslySetInnerHTML={{ __html: `` }}></noscript>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

const GlobalStyle = createGlobalStyle`
  #myapp {
    font-family: ${font.maru};
  }
`;
