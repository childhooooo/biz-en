import styled from 'styled-components';
import { view } from 'unflexible-ui-legacy';
import { color, font } from 'lib/config';

interface Props {
  name: string;
  href: string;
  image?: string;
  icon?: string;
  overview: string;
}

const MenuLink = ({ name, href, image, icon, overview }: Props) => {
  return (
    <Component href={href}>
      <h3>
        <img src={view.url('images/arrow_pink.png')} alt=">" />
        <span>{name}</span>
      </h3>
      <p>
        {image && <img className="image" src={image} alt={name} />}
        {icon && <img className="icon" src={icon} alt={name} />}
        <span>{overview}</span>
      </p>
    </Component>
  );
};

const Component = styled.a`
  position: relative;
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
    font-family: ${font.sansSerif};
    transition-duration: .3s;

    img {
      width: 20px;
    }

    span {
      margin-left: .5rem;
    }
  }

  p {
    position: relative;
    margin-top: .5rem;
    font-family: ${font.sansSerif};
    font-weight: 700;
    transition-duration: .3s;

    .image {
      width: 100%;
    }

    .icon {
      position: absolute;
      z-index: 1;
      top: -.5rem;
      display: block;
      height: calc(100% + .5rem);
      width: auto;
      left: 50%;
      transform: translateX(-50%);
    }

    span {
      position: relative;
      z-index: 2;
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
