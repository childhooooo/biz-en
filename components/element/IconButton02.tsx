import styled from 'styled-components';
import { ButtonKind } from './buttonKind';
import { color } from 'lib/config';

interface Props {
  name: string;
  icon: string;
  color: string;
  kind?: ButtonKind;
  href?: string;
  onClick?: string;
}

const IconButton01 = ({ name, icon, color, kind, href, onClick }: Props) => {
  if(kind === 'button' && onClick) {
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
`;

const Link = styled.a`
  text-decoration: none;
`;

const Icon = styled.div`
`;

const Name = styled.span`
  margin-left: 1rem;
  font-size: 1.25rem;
  font-weight: 400;
`;

interface InnterProps {
  color: string;
}

const Inner = styled.div<InnerProps>`
  display: flex;
  align-items: center;
  transition-duration: .3s;

  &:hover {
    transform: scale(1.03);
  }

  ${Icon} {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2rem;
    height: 2rem;
    background-color: ${props => props.color};
  }

  img {
    width: 75%;
    height: auto;
  }

  ${Name} {
    color: ${props => props.color};
  }
`

export default IconButton01;
