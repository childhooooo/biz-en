import { ReactNode } from 'react';
import styled from 'styled-components';
import { view } from 'unflexible-ui-legacy';
import { color, font, screen } from 'lib/config';

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
  max-width: 100%;
  border-collapse: collapse;
  border: 1px solid ${color.black};
  border-top: 3px solid ${color.semiSkyBlue};

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
      font-family: ${font.sansSerif};
      text-align: left;
      background-color: ${color.white};
    }
  }

  tr {
    display: flex;
    border-top: 1px solid ${color.black};
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
    background-color: ${color.semiLightGray};

    &.required::after {
      display: block;
      margin-left: 1rem;
      padding: .15rem .5rem;
      content: '必須';
      color: ${color.white};
      background-color: ${color.orange};
      border-radius: 2px;
    }
  }

  td {
    flex-grow: 1;
    flex-shrink: 1;

    > div:not(:first-child), ul:not(:first-child) {
      margin-top: 1rem;
    }

    p.error {
      margin-top: .5rem;
      font-size: .9rem;
      color: ${color.orange};

      &:before {
        content: '！';
      }
    }
  }

  ul {
    display: flex;
    align-items: center;
    list-style: none;

    li {
      &:not(:first-child) {
        margin-left: 1rem;
      }
    }
  }

  ul.radio {
    display: flex;
    list-style: none;

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
    max-width: 100%;
    padding: .5rem;
    color: ${color.black};
    outline: none;
    border: 1px solid ${color.black};
    font-size: 16px !important;
  }

  input[type="text"], input[type="email"], input[type="tel"], input[type="password"], input[type="date"], textarea {
    width: 500px;

    &.full {
      width: 100%;
    }

    &.semishort {
      width: 360px;
    }

    &.short {
      width: 200px;
    }
  }

.select {
  position: relative;
  width: 300px;
  border: 1px solid ${color.black};

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
    padding: .5rem;
  }
}

@media only screen and (max-width: ${screen.m}px) {
  tr {
    flex-direction: column;
  }

  th {
    width: 100%;
  }

  td {
    white-space: nowrap;
  }

  th, td {
    padding: 1rem;
  }
}

@media only screen and (max-width: ${screen.s}px) {
  ul:not(.radio) {
    flex-direction: column;
    align-items: flex-start;

    > li:not(:first-child) {
      margin-left: 0;
      margin-top: 1rem;
    }
  }

  textarea {
    width: 100%;
  }

  input:not(input[type="radio"]) {
    width: 280px;

    &.full {
      width: 280px;
    }

    &.semishort {
      width: 240px;
    }

    &.shot {
      width: 200px;
    }
  }

  .select {
    width: 240px;
  }
}
`

export default FormTable;
