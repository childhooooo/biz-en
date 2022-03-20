import { ReactNode } from 'react';
import styled from 'styled-components';
import { color, font } from 'lib/config';

interface Props {
  name: string;
  unit: string;
  children: ReactNode;
}

const PriceTable = ({ name, unit, children }: Props) => {
  return (
    <Component>
      <Header>
        <h3>{name}</h3>
        <p>{unit}</p>
      </Header>

      <Body>
        {children}
      </Body>
    </Component>
  );
};

const Component = styled.div`
font-family: ${font.sansSerif};
`

const Header = styled.div`
display: flex;
justify-content: space-between;

h3 {
  display: flex;
  align-items: center;
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
`;

export default PriceTable;
