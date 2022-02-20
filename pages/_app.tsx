import type { AppProps } from 'next/app';
import { useState, useEffect } from 'react';
import Head from 'next/head';
import { UnflexibleProvider } from 'unflexible-ui-legacy';
import Rellax from 'rellax';
import ofi from 'object-fit-images';

const config = {
  stacked: {
    padding: {
      wide: '180px',
      normal: '60px',
      narrow: '30px',
      thin: '10px',
    }
  },
  plainText: {
    baseLineHeight: '2'
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  const [rellax, setRellax] = useState(null);
  useEffect(() => {
    setRellax(Rellax('.rellax'));
    ofi();
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
      </Head>
      <UnflexibleProvider config={config}>
        <Component {...pageProps} />
      </UnflexibleProvider>
    </>
  );
}

export default MyApp;
