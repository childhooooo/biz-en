import type { AppProps } from 'next/app';
import { useState, useEffect } from 'react';
import Head from 'next/head';
import { UnflexibleProvider } from 'unflexible-ui';
import Rellax from 'rellax';

function MyApp({ Component, pageProps }: AppProps) {
  const [rellax, setRellax] = useState(null);
  useEffect(() => {
    setRellax(Rellax('.rellax'));
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
      </Head>
      <UnflexibleProvider>
        <Component {...pageProps} />
      </UnflexibleProvider>
    </>
  );
}

export default MyApp;
