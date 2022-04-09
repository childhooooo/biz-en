import styled from 'styled-components';
import { rgba } from 'polished';
import { view } from 'unflexible-ui-legacy';
import { color, screen } from 'lib/config';

interface Props {
  href: string;
  name: string;
  details: string;
  image: string;
}

const ServiceLink = ({ href, name, details, image }: Props) => {
  return (
    <Component image={image}>
      <figure>
        <img src={image} alt="背景" />
      </figure>

      <a href={href}>
        <h3>『{name}』</h3>
        <p>{details}</p>
        <img className="arrow" src={view.url('images/icon_arrow.png')} alt="→" />
      </a>
    </Component>
  );
};

interface ComponentProps {
  image: string;
}

const Component = styled.div<ComponentProps>`
  position: relative;
  width: 100%;
  overflow: hidden;

&:before {
  content: '';
  position: relative;
  display: block;
  padding-top: 140%;
}

figure {
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  &:before {
    content: '';
    position: absolute;
    z-index: 2;
    top: 50%;
    left: calc(-30vw + 30px);
    display: block;
    width: 30vw;
    height: 30vw;
    transform: translateY(-50%);
    background-color: ${color.red};
    border-radius: 50%;
    mix-blend-mode: multiply;
    transition-duration: .3s;
  }

  img {
    position: relative;
    z-index: 1;
    width: 100%;
    height: 100%;
  }
}

a {
  position: absolute;
  z-index: 2;
  top: 50%;
  left: calc(-30vw + 30px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30vw;
  height: 30vw;
  padding: 3rem;
  transform: translateY(-50%);
  color: ${color.white};
  text-decoration: none;
  transition-duration: .3s;
}

h3 {
width: 100%;
font-size: 1.25rem;
font-weight: 400;
text-align: left;
}

.arrow {
  display: block;
  mix-blend-mode: normal;
  width: 30px;
  margin-top: 2rem;
}

&:hover {
  figure:before, a {
    left: -30px;
  }
}

@media only screen and (max-width: ${screen.s}px) {
  figure {
    &:before {
      top: 75%;
      left: -30px;
      width: 95vw;
      height: 95vw;
    }
  }

  a {
    top: 75%;
    left: -30px;
    width: 95vw;
    height: 95vw;
  }
}
`

export default ServiceLink;
