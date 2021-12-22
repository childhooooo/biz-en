import { ReactNode } from 'react';
import { Stacked } from 'unflexible-ui';

import styled from 'styled-components';
import { rgba } from 'polished';
import { color } from 'lib/config';

interface Props {
  image: string;
  srcSet: string;
  children: ReactNode;
}

const Parallax = ({ image, srcSet, children }: Props) => {
  return (
    <Component>
      <img src={image} srcSet={srcSet} alt="背景" className="rellax" data-rellax-speed="10" data-rellax-percentage="0.1" />
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
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: auto;
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
