import { ReactNode } from 'react';
import styled from 'styled-components';
import { view } from 'unflexible-ui';

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
  border: 1px solid var(--black);
  border-top: 3px solid var(--semi-sky-blue);

  thead {
    tr {
      border: none;
    }

    th {
      display: block;
      width: 100%;
      padding: .5rem 1.5rem;
      font-size: 1.25rem;
      font-weight: 400;
      font-family: var(--sans-serif);
      text-align: left;
      background-color: var(--white);
    }
  }

  tr {
    display: flex;
    border-top: 1px solid var(--black);
  }

  th, td {
    padding: 1.5rem;
  }

  th {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 300px;
    flex-grow: 0;
    flex-shrink: 0;
    background-color: var(--semi-light-gray);

    &.required::after {
      display: block;
      margin-left: 1rem;
      padding: .15rem .5rem;
      content: '必須';
      color: var(--white);
      background-color: var(--orange);
      border-radius: 2px;
    }
  }

  td {
    flex-grow: 1;
    flex-shrink: 1;

  p:not(:first-child) {
    margin-top: 1rem;
    }
  }

  .radio {
    ul {
      display: flex;
      list-style: none;

    &:not(:first-child) {
    margin-left: 1rem;
    }
    }

    li:not(:first-child) {
      margin-left: 1.5rem;
    }

    label {
      margin-left: .25rem;
    }
  }

  .nowrap {
    display: flex;
  align-items: center;
  }

.inline-label {
  margin-right: .5rem;
}

  input, textarea {
    padding: .5rem;
    color: var(--black);
    outline: none;
    border: 1px solid var(--black);
  }

  input[type="text"], input[type="email"], input[type="password"] {
    width: 500px;
    max-width: 100%;

    &.full {
      width: 100%;
    }

    &.semishort {
      width: 360px;
    }

    &.short {
      width: 160px;
    }
  }

.select {
  position: relative;
  width: 300px;
  border: 1px solid var(--black);

  &:after {
    position: absolute;
    z-index: 2;
    right: .5rem;
    top: 50%;
    display: block;
width: 20px;
  height: 20px;
background-image: url(${view.url('images/arrow_black.png')});
background-size: contain;
  background-position: 50% 50%;
  content: '';
  transform: translateY(-40%);
  }

  select {
  width: 100%;
    padding: .5rem;
  }
}
`

export default FormTable;
