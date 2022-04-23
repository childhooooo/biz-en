import styled from 'styled-components';

interface Props {
  color: string;
  height: string;
}

const Border = ({ color, height }: Props) => {
  return (
  <Component color={color} height={height}>
  </Component>
  );
};

interface ComponentProps {
  color: string;
  height: string;
}

const Component = styled.hr<ComponentProps>`
  border: none;
  border-top: solid ${props => props.height} ${props => props.color};
`

export default Border;
