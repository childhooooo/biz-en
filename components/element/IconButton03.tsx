import styled from 'styled-components';
import { darken } from 'polished';
import { ButtonKind } from './buttonKind';
import { color, font } from 'lib/config';

interface Props {
  name: string;
  icon: string;
  color: string;
  kind?: ButtonKind;
  href?: string;
  onClick?: (event: any) => void;
}

const IconButton01 = ({ name, icon, color, kind, href, onClick }: Props) => {
  if(kind === 'submit') {
    return (
      <Button type="submit">
        <Inner color={color}>
          <Icon>
            <img src={icon} alt="アイコン" />
          </Icon>
          <Name>{name}</Name>
        </Inner>
      </Button>
    );
  } else if(kind === 'button' && onClick) {
    return (
      <Button onClick={onClick}>
        <Inner color={color}>
          <Icon>
            <img src={icon} alt="アイコン" />
          </Icon>
          <Name>{name}</Name>
        </Inner>
      </Button>
    );
  } else {
    return (
      <Link href={href || '#'}>
        <Inner color={color}>
          <Icon>
            <img src={icon} alt="アイコン" />
          </Icon>
          <Name>{name}</Name>
        </Inner>
      </Link>
    );
  }
};

const Button = styled.button`
  width: 100%;
`;

const Link = styled.a`
  display: block;
  width: 100%;
  text-decoration: none;
`;

const Icon = styled.div`
`;

const Name = styled.span`
  margin-left: 1rem;
  font-size: 1.25rem;
  font-weight: 400;
  font-family: ${font.sansSerif};
`;

interface InnerProps {
  color: string;
}

const Inner = styled.div<InnerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: .75rem 1.5rem;
  background-color: ${props => props.color};
  line-height: 1;
  border-radius: 10px;
  transition-duration: .3s;

  &:hover {
    background-color: ${props => darken(.05, props.color)};
  }

  ${Icon} {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2rem;
    height: 2rem;
  }

  img {
    width: 75%;
    height: auto;
  }

  ${Name} {
    color: ${color.white};
  }
`

export default IconButton01;
