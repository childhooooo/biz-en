import styled from 'styled-components';
import { view } from 'unflexible-ui-legacy';
import { color } from 'lib/config';

interface Props {
  redirect: string;
}

const CloseButton = ({ redirect }: Props) => {
  return (
    <Component href={redirect}>
      <span className="cross">
        <img src={view.url('images/icon_cross_white.png')} alt="×" />
      </span>

      <span className="text">閉じる</span>
    </Component>
  );
};

const Component = styled.a`
display: flex;
justify-content: center;
align-items: center;
text-decoration: none;
color: ${color.darkGray};

&:hover {
  text-decoration: underline;
}

.cross {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1.5rem;
  height: 1.5rem;
  padding: .25rem;
  background-color: ${color.darkGray};

  img {
    width: 90%;
    height: auto;
    vertical-align: middle;
  }
}

.text {
  margin-left: .5rem;
}
`

export default CloseButton;
