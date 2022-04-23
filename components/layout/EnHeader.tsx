import { Stacked, Columns, Block, PlainText } from 'unflexible-ui-legacy';
import { BreadCrumb, Route } from 'components/element';

import styled from 'styled-components';
import { rgba } from 'polished';
import { view } from 'unflexible-ui-legacy';
import { color, font, screen } from 'lib/config';
import { useAppState } from 'domains/app';

interface Props {
  title: string;
  language?: string;
  routes: Route[]
}

const Header = ({ title, language, routes }: Props) => {
  const appState = useAppState();

  const logout = async () => {
    appState.seeker.setState(null);
    appState.employerId.setState(null);

    try {
      await fetch('/api/matching/seeker/logout/', {
        method: 'POST'
      });
    } catch (e) {
    }
  };

  return (
    <Component>
      <Stacked paddingPos="none" color={color.darkGray} wrap>
        <Columns justify="space-between" align="center">
          <Block>
            <PlainText
              h1SizeXL=".9rem"
              h1SizeL=".9rem"
              h1SizeM=".9rem"
              h1SizeS=".7rem"
              h1SizeXS=".7rem"
              h1Color={color.white}
              h1Weight="400"
            >
              <h1 style={{ whiteSpace: 'nowrap' }}>{title}</h1>
            </PlainText>
          </Block>

          <Block>
            <SelectLanguage>
              <h3>Language :</h3>
              <ul>
                <li>
                  <a href={view.url('?lang=ja')} className={language === 'ja' ? 'selected' : language === '' ? 'selected' : ''}>日本語</a>
                </li>
                <li>
                  <a href={view.url('?lang=vi')} className={language === 'vi' ? 'selected' : ''}>Tiếng Việt</a>
                </li>
              </ul>
            </SelectLanguage>
          </Block>
        </Columns>
      </Stacked>

      <Stacked paddingSize="thin" wrap>
        <Stacked paddingPos="none">
          <div className="breadcrumb">
            <BreadCrumb routes={routes} />
          </div>
        </Stacked>

        <Stacked paddingSize="thin">
          <Columns justify="space-between" align="center">
            <Sitelogo href={view.url('service/matching')}>
              <h2>
                <img src={view.url('images/logo_en.png')} alt="縁 -en-" />
                <span>群馬県内に就職を希望する外国人材就職応援サイト</span>
              </h2>
            </Sitelogo>

            {(appState.seeker.state !== null || appState.employerId.state !== null) &&
              <Logout onClick={logout}>
                <img src={view.url('images/icon_logout.png')} alt="ログアウト" />
                <span>ログアウト</span>
              </Logout>
            }
          </Columns>
        </Stacked>
      </Stacked>
    </Component>
  );
};

const Component = styled.div`
  position: relative;
  width: 100%;
  background-color: ${color.lightGray};
  box-shadow: 0px -4px 8px rgba(0, 0, 0, .05) inset;

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

  @media only screen and (max-width: ${screen.m}px) {
    h2 {
      img {
        height: 3rem;
      }
    }
  }

  @media only screen and (max-width: ${screen.s}px) {
    h2 {
      flex-direction: column;
      align-items: flex-start;
      margin-top: .25rem;
      font-size: .9rem;

      img {
        height: 2.5rem;
      }

      span {
        margin-top: .5rem;
        margin-left: 0;
      }
    }
  }
`

const SelectLanguage = styled.div`
  display: flex;
  display: none;

  h3 {
    font-size: .9rem;
    font-weight: 400;
    color: ${color.white};
  }

ul {
  list-style: none;
  display: flex;
  margin-left: .5rem;
}

li {
  position: relative;

  &:not(:first-child) {
    &:before {
      content: '';
      position: absolute;
      top: .3rem;
      left: 0;
      display: block;
      width: 1px;
      height: calc(100% - .6rem);
      background-color: ${color.white};
      transform: rotate(30deg);
    }
  }
}

a {
  padding: .25rem .5rem;
  text-decoration: none;
  color: ${color.white};
  font-size: .9rem;

  &.selected, &:hover {
    color: ${color.theme};
  }
}
`;

const Sitelogo = styled.a`
display: block;
text-decoration: none;
`;

const Logout = styled.button`
  display: flex;
  align-items: center;
  padding: .5rem 3rem;
  border: 2px solid ${color.lightBlue};
  border-radius: 10px;
  font-family: ${font.sansSerif};
  transition-duration: .3s;

  &:hover {
    background-color: ${rgba(color.black, .05)};
  }

  img {
    width: 1.5rem;
    height: auto;
  }

  span {
    margin-left: .5rem;
    white-space: nowrap;
  }

  @media only screen and (max-width: ${screen.s}px) {
    position: absolute;
    top: .5rem;
    right: 0;
    padding: .35rem .75rem;

    img {
      width: 1.25rem;
    }

    span {
      font-size: .9rem;
    }
  }
`;

export default Header;
