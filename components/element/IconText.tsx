import styled from 'styled-components';
import { font, screen } from 'lib/config';

interface Props {
  icon: string;
  text: string;
}

const IconText = ({ icon, text }: Props) => {
  return (
    <Component>
      <img src={icon} alt={text} />
      <p dangerouslySetInnerHTML={{ __html: text }} />
    </Component>
  );
};

const Component = styled.div`
position: relative;

img {
  display: block;
  width: 100%;
  max-width: 120px;
  height: auto;
  margin: 0 auto;
}

p {
  margin-top: .5rem;
  text-align: center;
  font-family: ${font.sansSerif};
}

@media only screen and (max-width: ${screen.s}px) {
  p {
    font-size: .9rem;
  }
}
`

export default IconText;
