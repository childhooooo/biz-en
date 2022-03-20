import styled from 'styled-components';
import { view } from 'unflexible-ui-legacy';
import { color, font } from 'lib/config';

const tags: { [key: string]: any } = {
  'h1': styled.h1``,
  'h2': styled.h2``,
  'h3': styled.h3``,
  'h4': styled.h4``,
  'h5': styled.h5``,
  'p': styled.p``
};

interface Props {
  name: string;
  tag: string;
}

const Title06 = ({ name, tag }: Props) => {
  const Component = tags[tag];
  return (
    <Component>
      <Inner>
        <img src={view.url('images/icon_quote_gold_01.png')} alt="" />
        <span>{name}</span>
        <img src={view.url('images/icon_quote_gold_02.png')} alt="" />
      </Inner>
    </Component>
  );
};

const Inner = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: .25rem 1.25rem;
  color: ${color.gold};
  font-size: 1.5rem;
  font-weight: 400;
  font-family: ${font.sansSerif};
  text-align: center;

  img {
    width: 30px;
    height: 24px;
  }

  span {
    margin: 0 .5rem;
  }
`;

export default Title06;
