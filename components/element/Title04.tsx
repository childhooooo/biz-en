import styled from 'styled-components';

import { color } from 'lib/config';

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
}

const Title01 = ({name, tag}: Props) => {
  const Component = tags[tag];
  return (
    <Component>
      <Inner>{name}</Inner>
    </Component>
  );
};

const Inner = styled.span`
  display: block;
  width: 100%;
  padding: .25rem 1.25rem;
  font-size: 1.5rem;
  font-weight: 700;
  border-left: 5px solid ${color.lightBlue};
`;

export default Title01;
