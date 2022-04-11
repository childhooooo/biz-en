import styled from 'styled-components';
import { darken } from 'polished';
import { view } from 'unflexible-ui-legacy';
import { ButtonKind } from './buttonKind';
import { color, font } from 'lib/config';

interface Props {
  name: string;
  description: string;
  kind?: ButtonKind;
  href?: string;
  onClick?: () => void
}

const Button02 = ({ name, description, href, kind, onClick }: Props) => {
  if(kind === 'submit') {
    return (
      <button type="submit">
        <Inner>
          <h4>
            <img src={view.url('images/arrow_pink.png')} alt=">" />
            <span>{name}</span>
          </h4>

          <p>
            {description}
          </p>
        </Inner>
      </button>
    );
  } else if(kind === 'button' && onClick) {
    return (
      <button onClick={onClick}>
        <Inner>
          <h4>
            <img src={view.url('images/arrow_pink.png')} alt=">" />
            <span>{name}</span>
          </h4>

          <p>
            {description}
          </p>
        </Inner>
      </button>
    );
  } else {
    return (
      <Link href={href || '#'}>
        <Inner>
          <h4>
            <img src={view.url('images/arrow_pink.png')} alt=">" />
            <span>{name}</span>
          </h4>

          <p>
            {description}
          </p>
        </Inner>
      </Link>
    );
  }
};

const Link = styled.a`
  color: ${color.black};
  text-decoration: none;

  &:hover {
    text-decoration: none;
  }
`;

const Inner = styled.div`
  font-family: ${font.sansSerif};

  h4 {
    display: flex;
    align-items: center;
    line-height: 1;
    transition-duration: .3s;

    img {
      display: block;
      flex-shrink: 0;
      width: 1rem;
      height: auto;
    }

    span {
      margin-left: .5rem;
    }
  }

  p {
    margin-top: .5rem;
    font-size: .9rem;
  }

  &:hover {
    h4 {
        transform: translateX(8px);
    }
  }
`

export default Button02;
