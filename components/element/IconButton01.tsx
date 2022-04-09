import styled from 'styled-components';
import { ButtonKind } from './buttonKind';
import { color, font, screen } from 'lib/config';

interface Props {
  name: string;
  icon: string;
  kind?: ButtonKind;
  href?: string;
  onClick?: (e: any) => void;
}

const IconButton01 = ({ name, icon, kind, href, onClick }: Props) => {
  if (kind === 'button' && onClick) {
    return (
      <Button onClick={onClick}>
        <Inner>
          <img src={icon} alt="アイコン" />
          <span className="arrow">≫</span>
          <span className="name">{name}</span>
        </Inner>
      </Button>
    );
  } else {
    return (
      <Link href={href || '#'}>
        <Inner>
          <img src={icon} alt="アイコン" />
          <span className="arrow">≫</span>
          <span className="name">{name}</span>
        </Inner>
      </Link>
    );
  }
};

const Button = styled.button`
`;

const Link = styled.a`
  text-decoration: none;
`;

const Inner = styled.div`
  display: flex;
  align-items: center;
  transition-duration: .3s;

  &:hover {
    transform: translateX(10px);
    }

  img {
    width: auto;
    height: 3rem;
  }

  .name {
    margin-top: .3rem;
    margin-left: .1rem;
    font-size: 1.5rem;
    font-weight: 400;
    font-family: ${font.sansSerif};
    color: ${color.semiSkyBlue};
  }

  .arrow {
    margin-bottom: .25rem;
    margin-left: .5rem;
    font-size: 3rem;
    color: ${color.semiSkyBlue};
  }

  @media only screen and (max-width: ${screen.m}px) {
    .name {
      font-size: 1.25rem;
    }

    .arrow {
      font-size: 2rem;
    }
  }
`

export default IconButton01;
