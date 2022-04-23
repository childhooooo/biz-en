import styled from 'styled-components';
import { font, screen } from 'lib/config';

const tags: { [key: string]: any } = {
  'h1': styled.h1``,
  'h2': styled.h2``,
  'h3': styled.h3``,
  'h4': styled.h4``,
  'h5': styled.h5``,
  'p': styled.p``
};

interface Props {
  name: string;
  en: string;
  tag: string;
}

const Title02 = ({ name, en, tag }: Props) => {
  const Title = tags[tag];
  return (
    <Component>
      <p>{en}</p>
      <Title>{name}</Title>
    </Component>
  );
};

const Component = styled.div`
  text-align: center;

  p {
    font-size: 3rem;
    font-family: ${font.en};
    line-height: 1.25;
  }

  h1, h2, h3, h4 , h5 {
    font-size: 1rem;
    font-weight: 400;
  }

  @media only screen and (max-width: ${screen.m}px) {
    p {
      font-size: 2rem;
    }
  }
`

export default Title02;
