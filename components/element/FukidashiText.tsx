import styled from 'styled-components';
import { color, screen } from 'lib/config';

interface Props {
  fukidashi: string;
  text: string;
}

const FukidashiText = ({ fukidashi, text }: Props) => {
  return (
    <Component>
      <Fukidashi>
        <img src={fukidashi} alt="" />
      </Fukidashi>

      <Text>
      <p dangerouslySetInnerHTML={{ __html: text }} />
      </Text>
    </Component>
  );
};

const Component = styled.div`
position: relative;
display: flex;
align-items: center;

&::before {
  position: absolute;
  z-index: 1;
  top: 0;
  right: 0;
  content: '';
  width: calc(100% - 3rem);
  height: 100%;
  background-color: ${color.whiteBlue};
}

@media only screen and (max-width: ${screen.xs}px) {
  flex-direction: column;

  &:before {
    top: auto;
    bottom: 0;
    width: 100%;
    height: 80%;
  }
}
`

const Fukidashi = styled.div`
position: relative;
z-index: 2;
transform: translateY(-1rem);

img {
width: 200px;
height: auto;
}

@media only screen and (max-width: ${screen.m}px) {
  img {
    width: 140px;
  }
}

@media only screen and (max-width: ${screen.xs}px) {
  transform: translateY(0);
}
`;

const Text = styled.div`
position: relative;
z-index: 2;
padding: 1.5rem;

@media only screen and (max-width: ${screen.xs}px) {
  padding-top: .5rem;
}
`;

export default FukidashiText;
