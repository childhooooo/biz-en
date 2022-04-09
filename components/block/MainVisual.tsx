import styled, { keyframes } from 'styled-components';
import { view } from 'unflexible-ui-legacy';
import { color, font, screen } from 'lib/config';

interface Props {
}

const MainVisual = ({ }: Props) => {
  return (
    <Component>
      <Slides>
        <Slide01>
          <img
            src={view.url('images/mv@1500.jpg')}
            srcSet={`${view.url('images/mv@2000.jpg')} 2000w, ${view.url('images/mv@1500.jpg')} 1500w, ${view.url('images/mv@1250.jpg')} 1250w, ${view.url('images/mv@750.jpg')} 750w`}
            alt="背景"
          />

          <h2>
            SOUTHEAST ASIAN<br />
            EMPLOYMENT SUPPORT<br />
            IN JAPAN
          </h2>

          <p>
            日本ではたらきたい東南アジアの若者たちへ<br />
            群馬県内での試験をサポートします。
          </p>
        </Slide01>
        <Slide02>
          <img
            src={view.url('images/mv_02@1500.jpg')}
            srcSet={`${view.url('images/mv_02@1500.jpg')} 1500w, ${view.url('images/mv_02@1250.jpg')} 1250w, ${view.url('images/mv_02@750.jpg')} 750w`}
            alt="背景"
          />
        </Slide02>
        <Slide01>
          <img
            src={view.url('images/mv@1500.jpg')}
            srcSet={`${view.url('images/mv@2000.jpg')} 2000w, ${view.url('images/mv@1500.jpg')} 1500w, ${view.url('images/mv@1250.jpg')} 1250w, ${view.url('images/mv@750.jpg')} 750w`}
            alt="背景"
          />

          <h2>
            SOUTHEAST ASIAN<br />
            EMPLOYMENT SUPPORT<br />
            IN JAPAN
          </h2>

          <p>
            日本ではたらきたい東南アジアの若者たちへ<br />
            群馬県内での試験をサポートします。
          </p>
        </Slide01>
        <Slide02>
          <img
            src={view.url('images/mv_02@1500.jpg')}
            srcSet={`${view.url('images/mv_02@1500.jpg')} 1500w, ${view.url('images/mv_02@1250.jpg')} 1250w, ${view.url('images/mv_02@750.jpg')} 750w`}
            alt="背景"
          />
        </Slide02>
      </Slides>
    </Component>
  );
};

const Component = styled.div`
  width: 100vw;
  margin-top: 96px;
  overflow-x: hidden;

  @media only screen and (max-width: ${screen.m}px) {
    margin-top: 70px;
  }

  @media only screen and (max-width: ${screen.s}px) {
    margin-top: 57px;
  }
`;

const Slider = keyframes`
  0% {
    transform: translateX(0);
  }
  99% {
    transform: translateX(-70%);
  }
  100% {
    transform: translateX(0);
  }
`

const Slides = styled.div`
  display: flex;
  width: 350vw;
  animation: ${Slider} 40s linear 0s infinite;
`;

const Slide02 = styled.div`
width: 75vw;
height: 45vw;

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media only screen and (max-width: ${screen.s}px) {
  width: 100vw;
  height: calc(48vw + 58.8px);
}
`;

const Slide01 = styled.div`
  position: relative;
  width: 100vw;
  height: 45vw;

img {
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

h2 {
  position: absolute;
  z-index: 2;
  top: 50%;
  right: 50px;
  transform: translateY(-50%);
  font-size: 5.5rem;
  font-weight: 100;
  font-family: ${font.en};
  color: ${color.white};
  text-align: center;
  line-height: 1.25;
}

p {
  position: absolute;
  z-index: 2;
  bottom: 15px;
  right: 0;
  width: 40%;
  padding: 1.75rem;
  font-size: 1.25rem;
  color: ${color.white};
  background-color: rgba(0, 0, 0, .75);
}

@media only screen and (max-width: ${screen.l}px) {
  h2 {
    font-size: 3.5rem;
  }

  p {
    padding: 1rem 1.25rem;
    font-size: 1rem;
  }
}

@media only screen and (max-width: ${screen.m}px) {
  h2 {
    font-size: 3rem;
  }

  p {
    width: 50%;
  }
}

@media only screen and (max-width: ${screen.s}px) {
  height: calc(48vw + 58.8px);

  img {
    height: calc(100% - 58.8px);
  }

  h2 {
    top: 45%;
    right: 25px;
    font-size: 2rem;
  }

  p {
    bottom: 0;
    width: 100%;
    padding: .75rem 1rem;
    font-size: .9rem;
    text-align: center;
  }
}

@media only screen and (max-width: ${screen.xs}px) {
  h2 {
    right: 15px;
    font-size: 1.75rem;
  }

  p {
    font-size: .9rem;
    text-align: center;
  }
}
`

export default MainVisual;
