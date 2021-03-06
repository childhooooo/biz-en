import styled from 'styled-components';
import { darken } from 'polished';
import { ButtonKind } from './buttonKind';
import { color, font, screen } from 'lib/config';

interface Props {
  name: string;
  kind?: ButtonKind;
  href?: string;
  onClick?: () => void
}

const Button01 = ({ name, href, kind, onClick }: Props) => {
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
    text-decoraton: none;
  }
`;

const Inner = styled.span`
  display: block;
  width: 100%;
  padding: 1rem;
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

  @media only screen and (max-width: ${screen.m}px) {
    font-size: 1.25rem;
  }

  @media only screen and (max-width: ${screen.s}px) {
    font-size: 1rem;
  }
`

export default Button01;
