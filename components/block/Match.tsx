import React from 'react';
import styled from 'styled-components';
import { view } from 'unflexible-ui-legacy';

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
  font-size: 1.75rem;
  text-align: center;
}

img {
  width: 100px;
  margin: 0 1rem;
}
`

export default Match;
