import styled from 'styled-components';
import { view } from 'unflexible-ui-legacy';
import { color } from 'lib/config';

interface Props {
  name: string;
  href: string;
  image?: string;
  overview: string;
}

const MenuLink = ({ name, href, image, overview }: Props) => {
  return (
    <Component href={href}>
      <h3>
        <img src={view.url('images/arrow_pink.png')} alt=">" />
        <span>{name}</span>
      </h3>
      <p>
        {image && <img src={image} alt={name} />}
        <span>{overview}</span>
      </p>
    </Component>
  );
};

const Component = styled.a`
  display: block;
  height: 100%;
  padding: .75rem;
  background-color: ${color.white};
  border: 1px solid ${color.gray};
  border-top: 5px solid ${color.gray};
  text-decoration: none;
  color: ${color.black};

  h3 {
    display: flex;
    align-items: center;
    font-size: 1.15rem;
    transition-duration: .3s;

    img {
      width: 20px;
    }

    span {
      margin-left: .5rem;
    }
  }

  p {
    margin-top: .5rem;
    font-weight: 700;
    transition-duration: .3s;

    img {
      width: 100%;
    }

    span {
      display: block;
      margin-top: .5rem;
    }
  }

  &:hover {
    h3, p {
      color: ${color.gray};
    }
  }
`

export default MenuLink;