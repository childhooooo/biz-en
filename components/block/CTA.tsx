import styled from 'styled-components';
import { view } from 'unflexible-ui-legacy';
import { screen } from 'lib/config';

interface Props {
}

const CTA = ({ }: Props) => {
  return (
    <Component href={view.url('contact')}>
      <img
        src={view.url('images/index_contact@1500.jpg')}
        srcSet={`${view.url('images/index_contact@2000.jpg')} 2000w, ${view.url('images/index_contact@1500.jpg')} 1500w, ${view.url('images/index_contact@1250.jpg')} 1250w, ${view.url('images/index_contact@750.jpg')} 750w`}
      />
    </Component>
  );
};

const Component = styled.a`
  position: relative;
  display: block;

  &:before {
    content: '';
    display: block;
    position: relative;
    padding-top: 50%;
  }

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 50% 50%;
    font-family: 'object-fit: cover;object-position: 50% 50%;';
  }

  @media only screen and (max-width: ${screen.m}px) {
    &:before {
      padding-top: 60%;
    }
  }

  @media only screen and (max-width: ${screen.s}px) {
    &:before {
      padding-top: 75%;
    }
  }
`

export default CTA;
