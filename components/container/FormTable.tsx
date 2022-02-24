import { ReactNode } from 'react';
import styled from 'styled-components';
import { color } from 'lib/config';

interface Props {
  children: ReactNode;
}

const FormTable = ({ children }: Props) => {
  return (
    <Component>
      {children}
    </Component>
  );
};

const Component = styled.table`
  width: 100%;
  border-collapse: collapse;
  border: 1px solid ${color.semiLightGray};
  border-top: 3px solid ${color.semiSkyBlue};

  tr {
    display: flex;

    &:not(:first-child) {
      border-top: 2px solid ${color.gray};
    }

    &.required th::after {
      display: block;
      content: '必須';
      padding: .25rem .5rem;
      color: ${color.white};
      background-color: ${color.orange};
      border-radius: 3px;
    }
  }

  th {
    display: flex;
    flex-shrink: 0;
    align-items: start;
    justify-content: space-between;
    width: 300px;
    padding: 2rem;
    background-color: ${color.semiLightGray};
    text-align: left;
    font-weight: 400;
    vertical-align: top;
  }

  td {
    flex-grow: 1;
    flex-shrink: 1;
    width: 100%;
    padding: 2rem;
  }

  .radio-group {
    display: flex;
    list-style: none;

    li {
      &:not(:first-child) {
        margin-left: 3rem;
      }
    }

    label {
      margin-left: .5rem;
    }
  }

  input[type="text"], input[type="email"], input[type="tel"], input[type="password"], textarea {
    width: 100%;
    padding: .75rem;
    border: 1px solid ${color.darkGray};
  }
`

export default FormTable;
