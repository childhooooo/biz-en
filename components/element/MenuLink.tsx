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
        <span>{overview}</span>
      </p>
      {icon && <img className="icon" src={icon} alt={name} />}
    </Component>
  );
};

const Component = styled.a`
  position: relative;
  display: block;
  height: 100%;
  min-height: 160px;
  padding: .75rem;
  background-color: ${color.white};
  border: 1px solid ${color.gray};
  border-top: 5px solid ${color.gray};
  text-decoration: none;
  color: ${color.black};

  h3 {
    position: relative;
    z-index: 2;
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

  .icon {
    position: absolute;
    z-index: 1;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    display: block;
    width: 100px;
    height: auto;
  }

  p {
    position: relative;
    z-index: 2;
    height: 100%;
    margin-top: .5rem;
    font-family: ${font.sansSerif};
    font-weight: 400;
    transition-duration: .3s;

    .image {
      width: 100%;
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
