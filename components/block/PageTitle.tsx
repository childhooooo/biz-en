import { BreadCrumb, Route } from 'components/element';
import { Stacked } from 'unflexible-ui-legacy';

import styled from 'styled-components';
import { view } from 'unflexible-ui-legacy';
import { color } from 'lib/config';

interface Props {
  name?: string;
  routes: Route[]
}

const PageTitle = ({ name, routes }: Props) => {
  return (
    <Component>
      <Stacked paddingSize="thin" wrap>
        <Stacked paddingPos="none">
          <div className="breadcrumb">
            <BreadCrumb routes={routes} />
          </div>
        </Stacked>

        {name &&
          <Stacked paddingSize="thin">
            <h2>
              <img src={view.url('images/icon_pagetitle.png')} alt="アイコン" />
              <span>{name}</span>
            </h2>
          </Stacked>
        }
      </Stacked>
    </Component>
  );
};

const Component = styled.div`
  width: 100%;
  margin-top: 99px;
  border-top: 5px solid ${color.darkGray};
  border-bottom: 5px solid ${color.white};
  background-image: url(${view.url('images/back_pagetitle.png')});
  background-size: contain;
  background-position: 100% 50%;

  h2 {
    display: flex;
    align-items: center;
    font-size: 1.25rem;

    img {
      width: 50px;
    }

    span {
      margin-left: 10px;
    }
  }
`

export default PageTitle;
