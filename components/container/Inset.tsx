import { ReactNode } from 'react';
import styled from 'styled-components';
import { screen } from 'lib/config';

interface Props {
  size: string;
  sizeXL?: string;
  sizeL?: string;
  sizeM?: string;
  sizeS?: string;
  sizeXS?: string;
  children: ReactNode;
}

const Inset = ({ size, sizeXL, sizeL, sizeM, sizeS, sizeXS, children }: Props) => {
  return (
  <Component size={size} sizeXL={sizeXL} sizeL={sizeL} sizeM={sizeM} sizeS={sizeS} sizeXS={sizeXS} >
    {children}
  </Component>
  );
};

interface ComponentProps {
  size: string;
  sizeXL?: string;
  sizeL?: string;
  sizeM?: string;
  sizeS?: string;
  sizeXS?: string;
}

const Component = styled.div<ComponentProps>`
  padding: ${props => props.sizeXL || props.size};

  ${props => props.sizeL && `
    @media only screen and (max-width: ${screen.l}px) {
      padding: ${props.sizeL};
    }
  `}

  ${props => props.sizeM && `
    @media only screen and (max-width: ${screen.m}px) {
      padding: ${props.sizeM};
    }
  `}

  ${props => props.sizeS && `
    @media only screen and (max-width: ${screen.s}px) {
      padding: ${props.sizeS};
    }
  `}

  ${props => props.sizeXS && `
    @media only screen and (max-width: ${screen.xs}px) {
      padding: ${props.sizeXS};
    }
  `}
`

export default Inset;
