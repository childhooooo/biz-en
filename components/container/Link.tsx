import { ReactNode } from 'react';
import styled from 'styled-components';

interface Props {
  href: string;
  children: ReactNode;
}

const Link = ({ href, children }: Props) => {
  return (
  <Component href={href}>
    {children}
  </Component>
  );
};

const Component = styled.a`
  display: block;
  width: 100%;
  color: var(--black);
  text-decoration: none;
`

export default Link;
