import { ReactNode } from 'react';
import styled from 'styled-components';
import { color, font, screen } from 'lib/config';

interface Props {
  children: ReactNode;
}

const ContactForm = ({ children }: Props) => {
  return (
    <Component>
      {children}
    </Component>
  );
};

const Component = styled.dl`
  width: 100%;
  font-family: ${font.sansSerif};

  > div {
    &:not(:first-child) {
      margin-top: 1rem;
    }

    &.required dt label::before {
      display: block;
      content: '※';
      color: ${color.orange};
    }
  }

  dt {
    label {
      display: flex;
      flex-shrink: 0;
      align-items: flex-start;
      width: 300px;
      margin-bottom: .5rem;
      text-align: left;
      font-weight: 700;
      vertical-align: top;
    }
  }

  dd {
    width: 100%;
    margin-top: .25rem;

    & + dd:not(:first-child) {
      margin-top: 1rem;
    }
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

  input, textarea {
    font-size: 16px !important;
  }

  input[type="text"], input[type="email"], input[type="tel"], input[type="password"], textarea {
    width: 100%;
    padding: .75rem;
    border: 1px solid ${color.gray};
  }

  @media only screen and (max-width: ${screen.m}px) {
    .radio-group {
      flex-direction: column;

      li {
        &:not(:first-child) {
          margin-left: 0;
          margin-top: .25rem;
        }
      }
    }
  }
`

export default ContactForm;
