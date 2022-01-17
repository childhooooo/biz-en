import styled from 'styled-components';
import { color as configColor } from 'lib/config';

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
  icon: string;
  color?: string;
}

const Title03 = ({ name, icon, tag, color }: Props) => {
  const Title = tags[tag];
  return (
    <Component color={color || configColor.black}>
      <img src={icon} alt="アイコン" />
      <Title>{name}</Title>
    </Component>
  );
};

interface ComponentProps {
  color: string;
}

const Component = styled.div<ComponentProps>`
  display: flex;
  align-items: center;

img {
  width: auto;
  height: 60px;
}

  h1, h2, h3, h4 , h5 {
    margin-left: .75rem;
    font-size: 1.25rem;
    font-weight: 400;
    color: ${props => props.color};
  }
`

export default Title03;
