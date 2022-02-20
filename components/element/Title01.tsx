import styled from 'styled-components';
import { Stacked } from 'unflexible-ui-legacy';

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
    <Stacked paddingPos="none" color={color.blue}>
      <Component>
        <Inner>{name}</Inner>
      </Component>
    </Stacked>
  );
};

const Inner = styled.span`
  display: block;
  width: 100%;
  padding: .5rem .75rem;
  font-size: 1.25rem;
  font-weight: 400;
  color: ${color.white};
`;

export default Title01;
