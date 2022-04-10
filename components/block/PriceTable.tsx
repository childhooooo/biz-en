import { ReactNode } from 'react';
import styled from 'styled-components';
import { color, font, screen } from 'lib/config';

interface Props {
  name: string;
  unit: string;
  children: ReactNode;
}

const PriceTable = ({ name, unit, children }: Props) => {
  return (
    <Component>
      <div>
        <Header>
          <h3>{name}</h3>
          <p>{unit}</p>
        </Header>

        <Body>
          {children}
        </Body>
      </div>
    </Component>
  );
};

const Component = styled.div`
font-family: ${font.sansSerif};
overflow: scroll;
`

const Header = styled.div`
display: flex;
justify-content: space-between;

h3 {
  display: flex;
  align-items: center;
  padding-left: .25rem;
  font-size: 1rem;

  &::before {
    content: '';
    display: block;
    width: 1em;
    height: 1em;
    margin-right: .5rem;
    background-color: ${color.gray};
    transform: rotate(45deg);
  }
}

@media only screen and (max-width: ${screen.s}px) {
  flex-direction: column;

  h3 {
    &::before {
      margin-left: .25rem;
    }
  }

  p {
    margin-top: .25rem;
  }
}
`;

const Body = styled.table`
width: 100%;
margin-top: 1rem;
border-collapse: collapse;

th, td {
  padding: 1.5rem;
  border-top: 1px solid ${color.gray};
  border-left: 1px solid ${color.gray};
  font-weight: 400;

  &:last-child {
    border-right 1px solid ${color.gray};
  }
}

th {
  text-align: left;
  min-width: 80px;
}

td {
  text-align: center;

  &.note {
    background-color: ${color.whitePurple};
    text-align: left;
  }
}

tr {
  &:last-child {
    border-bottom: 1px solid ${color.gray};
  }
}

strong {
  margin: .25rem;
  font-weight: 400;
  font-size: 1.15em;
}

@media only screen and (max-width: ${screen.m}px) {
  th, td {
    padding: 1rem;
    font-size: .9rem;
  }
}
`;

export default PriceTable;
