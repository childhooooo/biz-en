import styled from 'styled-components';
import { ButtonKind } from './buttonKind';
import { color, font } from 'lib/config';

interface Props {
  name: string;
  color: string;
  kind?: ButtonKind;
  href?: string;
  onClick?: () => void
}

const Button02 = ({ name, color, href, kind, onClick }: Props) => {
  if(kind === 'button' && onClick) {
    return (
      <button onClick={onClick}>
        <Inner color={color}>{name}</Inner>
      </button>
    );
  } else {
    return (
      <Link href={href || '#'}>
        <Inner color={color}>{name}</Inner>
      </Link>
    );
  }
};

const Link = styled.a`
  text-decoration: none;

  &:hover {
    text-decoration: none;
  }
`;

interface InnerProps {
  color: string;
}

const Inner = styled.span<InnerProps>`
  display: block;
  width: 100%;
  padding: .75rem;
  font-size: 1rem;
  color: ${color.white};
  background-color: ${props => props.color};
  font-family: ${font.sansSerif};
  text-align: center;
  border: 2px solid ${props => props.color};
  transition-duration: .3s;

  &:hover {
    color: ${props => props.color};
    background-color: ${color.white};
  }
`

export default Button02;
