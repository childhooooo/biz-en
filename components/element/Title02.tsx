import styled from 'styled-components';

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
  en: string;
  tag: string;
}

const Title02 = ({ name, en, tag }: Props) => {
  const Title = tags[tag];
  return (
    <Component>
      <p>{en}</p>
      <Title>{name}</Title>
    </Component>
  );
};

const Component = styled.div`
  text-align: center;

  p {
    font-size: 3rem;
    font-family: var(--en);
    line-height: 1.25;
  }

  h1, h2, h3, h4 , h5 {
    font-size: 1rem;
    font-weight: 400;
  }
`

export default Title02;
