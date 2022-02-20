import { ReactNode } from 'react';
import styled from 'styled-components';
import { color } from 'lib/config';

interface Props {
  children: ReactNode;
}

const Table01 = ({children}: Props) => {
  return (
  <Component>
    {children}
  </Component>
  );
};

const Component = styled.table`
  border-collapse: collapse;

  tr {
    border-top: 1px solid ${color.black};

    &:last-child {
      border-bottom: 1px solid ${color.black};
    }
  }

  th, td {
    padding: 1.5rem;
    line-height: 2;
  }

  th {
    font-weight: 400;
    white-space: nowrap;
  }

  td ul {
    list-style: none;
  }
`

export default Table01;
