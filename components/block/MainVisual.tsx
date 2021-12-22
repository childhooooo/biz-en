import styled from 'styled-components';
import { view } from 'unflexible-ui';

interface Props {
}

const MainVisual = ({}: Props) => {
  return (
    <Component>
      <img
        src={view.url('images/mv@1500.jpg')}
        srcSet={`${view.url('images/mv@2000.jpg')} 2000w, ${view.url('images/mv@1500.jpg')} 1500w, ${view.url('images/mv@1250.jpg')} 1250w, ${view.url('images/mv@750.jpg')} 750w`}
        alt="背景"
      />

      <h2>
        SOUTHEAST ASIAN<br/>
        EMPLOYMENT SUPPORT<br/>
        IN JAPAN
      </h2>

      <p>
        日本ではたらきたい東南アジアの若者たちへ<br/>
        群馬県内での試験をサポートします。
      </p>
    </Component>
  );
};

const Component = styled.div`
  position: relative;
  width: 100%;
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
  font-size: 5rem;
  font-weight: 100;
  font-family: var(--en);
  color: var(--white);
  text-align: center;
}

p {
  position: absolute;
  z-index: 2;
  bottom: 15px;
  right: 0;
  width: 40%;
  padding: 1rem 1.25rem;
  color: var(--white);
  background-color: rgba(0, 0, 0, .75);
}
`

export default MainVisual;
