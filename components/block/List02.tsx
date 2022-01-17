import { ReactNode } from 'react';
import styled from 'styled-components';

interface Props {
  name: string;
  children: ReactNode;
}

const List01 = ({ name, children}: Props) => {
  return (
  <Component>
    <h3>{name}</h3>
    <ul>{children}</ul>
  </Component>
  );
};

const Component = styled.div`
  padding: 1.5rem;
  background-color: var(--light-gray);

  h3 {
  font-size: 1.25rem;
  font-weight: 400;
  color: var(--text-blue);
  }

  ul {
    list-style-type: none;
  }

  li {
  display: flex;
  margin: .5rem 0;

    &:before {
      content: '⚫︎ ';
      margin-right: .25rem;
      color: var(--text-blue);
    }
  }
`

export default List01;
