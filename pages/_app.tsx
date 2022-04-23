import '@react-pdf-viewer/core/lib/styles/index.css';

import type { AppProps } from 'next/app';
import { ReactNode, useState, useEffect } from 'react';
import Head from 'next/head';
import { UnflexibleProvider } from 'unflexible-ui-legacy';
import styled from 'styled-components';
import { Worker } from '@react-pdf-viewer/core';
import Rellax from 'rellax';
import ofi from 'object-fit-images';
import { AppStateProvider, useAppState } from 'domains/app';
import { color, font } from 'lib/config';

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
            <AppContent>
              <Component {...pageProps} />
            </AppContent>
          </AppStateProvider>
        </UnflexibleProvider>
      </Worker>
    </>
  );
}

interface Props {
  children: ReactNode;
}

const AppContent = ({ children }: Props) => {
  const appState = useAppState();

  return (
    <>
      {children}
      {appState.popupImage.state &&
        <PopupImage onClick={() => appState.popupImage.setState(null)}>
          <div>
            <p>{appState.popupImage.state.name}</p>
            <img src={appState.popupImage.state.url} alt={appState.popupImage.state.name} />
          </div>
        </PopupImage>
      }
    </>
  );
};

const PopupImage = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, .5);

  > div {
    max-height: 90vh;
    max-width: 100vw;
    padding: 1rem;
    background-color: ${color.white};
    overflow: scroll;
  }

  p {
    text-align: center;
    font-size: 1.25rem;
  }

  img {
    display: block;
    width: 800px;
    max-width: 100%;
    height: auto;
    margin-top: 1rem;
  }

  &::before {
    position: absolute;
    top: 20px;
    right: 20px;
    content: '×';
    color: ${color.white};
    font-size: 4rem;
    font-weight: 700;
    line-height: 1;
  }
`;

export default MyApp;
