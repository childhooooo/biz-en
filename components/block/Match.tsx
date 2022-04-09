import React from 'react';
import styled from 'styled-components';
import { view } from 'unflexible-ui-legacy';
import { font, screen } from 'lib/config';

interface Props {
  target01: string;
  target02: string;
}

const Match = ({ target01, target02 }: Props) => {
  return (
  <Component>
    <p dangerouslySetInnerHTML={ { __html: target01 } } />
    <img src={view.url('images/icon_handshake.png')} alt="アイコン" />
    <p dangerouslySetInnerHTML={ { __html: target02 } } />
  </Component>
  );
};

const Component = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    font-family: ${font.sansSerif};
    font-size: 1.75rem;
    text-align: center;
  }

  img {
    width: 100px;
    margin: 0 1rem;
  }

  @media only screen and (max-width: ${screen.m}px) {
    p {
      font-size: 1.25rem;
    }

    img {
      width: 60px;
    }
  }

  @media only screen and (max-width: ${screen.s}px) {
    flex-direction: column;

    img {
      margin: 1rem 0;
    }
  }
`

export default Match;
