import { BreadCrumb, Route } from 'components/element';
import { Stacked } from 'unflexible-ui-legacy';

import styled from 'styled-components';
import { view } from 'unflexible-ui-legacy';
import { color } from 'lib/config';

interface Props {
  routes: Route[]
}

const EnPageTitle = ({ routes }: Props) => {
  return (
    <Component>
      <Stacked paddingSize="thin" wrap>
        <Stacked paddingPos="none">
          <div className="breadcrumb">
            <BreadCrumb routes={routes} />
          </div>
        </Stacked>

        <Stacked paddingSize="thin">
          <h2>
            <img src={view.url('images/logo_en.png')} alt="縁 -en-" />
            <span>群馬県内に就職を希望する外国人材就職応援サイト</span>
          </h2>
        </Stacked>
      </Stacked>
    </Component>
  );
};

const Component = styled.div`
  width: 100%;
  margin-top: 99px;
  border-top: 5px solid ${color.darkGray};
  border-bottom: 5px solid ${color.white};

  h2 {
    display: flex;
    align-items: center;
    font-size: 1rem;
    color: ${color.darkGray};

    img {
      width: auto;
      height: 4rem;
    }

    span {
      margin-left: 10px;
    }
  }
`

export default EnPageTitle;
