import { ReactNode } from 'react';
import styled from 'styled-components';
import { color, font, screen } from 'lib/config';

interface Props {
  name: string;
  en: string;
  children: ReactNode;
}

const List01 = ({ name, en, children}: Props) => {
  return (
  <Component>
    <div>
      <p>{en}</p>
      <h3>{name}</h3>
    </div>
    <ul>{children}</ul>
  </Component>
  );
};

const Component = styled.div`
  display: flex;
  align-items: center;
  padding: 1.5rem;
  background-color: ${color.whitePurple};

  h3 {
    font-family: ${font.sansSerif};
    font-size: 1.25rem;
    font-weight: 400;
    color: ${color.gold};
    text-align: center;

    &:before {
      content: '＜';
    }

    &:after {
    content: '＞';
    }
  }

  p {
    font-family: ${font.sansSerif};
    font-size: 2.5rem;
    font-weight: 400;
    color: ${color.gold};
    text-align: center;
  }

  > div {
    width: 50%;
  }

  ul {
    width: 50%;
    padding-left: 1.5rem;
  }

  li {
    margin: .5rem 0;
  }

  @media only screen and (max-width: ${screen.l}px) {
    h3 {
      font-size: 1rem;
    }

    p {
      font-size: 1.75rem;
    }
  }

  @media only screen and (max-width: ${screen.m}px) {
    flex-direction: column;

    > div {
      width: 100%;
    }

    ul {
      width: 100%;
      margin-top: .75rem;
    }
  }
`

export default List01;
