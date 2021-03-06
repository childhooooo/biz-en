import styled from 'styled-components';
import { darken } from 'polished';
import { ButtonKind } from './buttonKind';
import { color, font } from 'lib/config';

interface Props {
  name: string;
  kind?: ButtonKind;
  href?: string;
  onClick?: () => void
}

const Button02 = ({ name, href, kind, onClick }: Props) => {
  if(kind === 'button' && onClick) {
    return (
      <Button onClick={onClick}>
        <Inner>{name}</Inner>
      </Button>
    );
  } else {
    return (
      <Link href={href || '#'}>
        <Inner>{name}</Inner>
      </Link>
    );
  }
};

const Button = styled.button`
`;

const Link = styled.a`
  text-decoration: none;

  &:hover {
    text-decoration: none;
  }
`;

const Inner = styled.span`
  display: block;
  width: 100%;
  padding: 1rem 4rem;
  font-size: 1.5rem;
  color: ${color.white};
  background-color: ${color.theme};
  font-family: ${font.sansSerif};
  text-align: center;
  border: 2px solid ${color.white};
  border-radius: 20px;
  transition-duration: .3s;

  &:hover {
    background-color: ${darken(.035, color.theme)};
  }
`

export default Button02;
