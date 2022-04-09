import { ReactNode } from 'react';
import { Stacked } from 'unflexible-ui-legacy';

import styled from 'styled-components';
import { rgba } from 'polished';
import { color, screen } from 'lib/config';

interface Props {
  image: string;
  srcSet: string;
  children: ReactNode;
}

const Parallax = ({ image, srcSet, children }: Props) => {
  return (
    <Component>
      <img
        src={image}
        srcSet={srcSet}
        alt="背景"
        className="rellax"
        data-rellax-speed="8"
        data-rellax-desktop-speed="8"
        data-rellax-tablet-speed="2"
        data-rellax-mobile-speed="2"
        data-rellax-xs-speed="2"
        data-rellax-percentage="0.2"
      />
      <Stacked paddingSize="wide">
        <Contents>
          <div>{children}</div>
        </Contents>
      </Stacked>
    </Component>
  );
};

const Component = styled.div`
  position: relative;
  overflow: hidden;

  img {
    position: absolute;
    z-index: 1;
    top: -10%;
    left: -10%;
    display: block;
    width: 120%;
    height: 180%;
    object-fit: cover;
    object-position: 50% 30%;
  }

  @media only screen and (max-width: ${screen.m}px) {
    img {
      height: 140%;
    }
  }
`;

const Contents = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: center;

  > div {
    max-width: 600px;
    padding: 2rem;
    background-color: ${rgba(color.white, .75)};
  }
`;

export default Parallax;
