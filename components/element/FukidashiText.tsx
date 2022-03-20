import styled from 'styled-components';
import { color } from 'lib/config';

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
`

const Fukidashi = styled.div`
position: relative;
z-index: 2;
transform: translateY(-1rem);

img {
width: 200px;
height: auto;
}
`;

const Text = styled.div`
position: relative;
z-index: 2;
margin-left: 1.5rem;
padding: 1.5rem;
`;

export default FukidashiText;
