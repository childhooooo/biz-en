import { ReactNode } from 'react';
import styled from 'styled-components';

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
  background-color: var(--white-purple);

  h3 {
  font-size: 1.25rem;
  font-weight: 400;
  color: var(--gold);
  text-align: center;

  &:before {
    content: '＜';
  }

  &:after {
  content: '＞';
  }
  }

  p {
  font-size: 2.5rem;
  font-weight: 300;
  color: var(--gold);
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
`

export default List01;
