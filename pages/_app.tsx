import '@react-pdf-viewer/core/lib/styles/index.css';

import type { AppProps } from 'next/app';
import { useState, useEffect } from 'react';
import Head from 'next/head';
import { UnflexibleProvider } from 'unflexible-ui-legacy';
import { Worker } from '@react-pdf-viewer/core';
import Rellax from 'rellax';
import ofi from 'object-fit-images';
import { AppStateProvider } from 'domains/app';
import { font } from 'lib/config';

const config = {
  stacked: {
    padding: {
      wide: '180px',
      normal: '60px',
      narrow: '30px',
      thin: '10px',
    }
  },
  columns: {
    gapRate: {
      xl: 1,
      l: 1,
      m: 1,
      s: .5,
      xs: .5
    }
  },
  plainText: {
    baseLineHeight: '2',
    baseFamily: font.maru
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  const [rellax, setRellax] = useState<any | null>(null);

  useEffect(() => {
    setRellax(Rellax('.rellax'));
    ofi();
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
      </Head>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.5.207/build/pdf.worker.js">
        <UnflexibleProvider config={config}>
          <AppStateProvider>
            <Component {...pageProps} />
          </AppStateProvider>
        </UnflexibleProvider>
      </Worker>
    </>
  );
}

export default MyApp;
