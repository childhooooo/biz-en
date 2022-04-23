import styled from 'styled-components';
import { screen } from 'lib/config';

interface Props {
}

const EnPageTitle = ({}: Props) => {
  return (
    <Component>
    </Component>
  );
};

const Component = styled.div`
  margin-top: 149px;

  @media only screen and (max-width: ${screen.m}px) {
    margin-top: 113px;
  }

  @media only screen and (max-width: ${screen.s}px) {
    margin-top: 120px;
  }
`;

export default EnPageTitle;
