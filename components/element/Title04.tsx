import styled from 'styled-components';

import { color, font, screen } from 'lib/config';

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
  tag: string;
  color: string;
}

const Title01 = ({name, tag, color}: Props) => {
  const Component = tags[tag];
  return (
    <Component>
      <Inner color={color}>{name}</Inner>
    </Component>
  );
};

interface InnerProps {
  color: string;
}

const Inner = styled.span<InnerProps>`
  display: block;
  width: 100%;
  padding: .25rem 1.25rem;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: ${font.sansSerif};
  border-left: 5px solid ${props => props.color};

  @media only screen and (max-width: ${screen.m}px) {
    font-size: 1.25rem;
  }
`;

export default Title01;
