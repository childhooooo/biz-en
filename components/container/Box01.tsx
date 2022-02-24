import { ReactNode } from 'react';
import styled from 'styled-components';
import { color } from 'lib/config';

interface Props {
  padding: string;
  color: string;
  children: ReactNode;
}

const Box01 = ({ padding, color, children }: Props) => {
  return (
    <Component padding={padding} color={color}>
      {children}
    </Component>
  );
};

interface ComponentProps {
  padding: string;
  color: string;
}

const Component = styled.div<ComponentProps>`
  padding: ${props => props.padding};
  border: 1px solid ${color.gray};
  border-top: 3px solid ${props => props.color};
`

export default Box01;
