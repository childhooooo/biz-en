import { Stacked, Columns, Block, PlainText } from 'unflexible-ui';

import styled from 'styled-components';
import { view } from 'unflexible-ui';
import { color } from 'lib/config';

interface Props {
  title: string;
  language?: string;
}

const Header = ({ title, language }: Props) => {
  return (
    <Component>
      <Stacked paddingPos="none" color={color.darkGray} wrap>
        <Columns justify="space-between" align="center">
          <Block>
            <PlainText
              h1SizeXL=".9rem"
              h1SizeL=".9rem"
              h1SizeM=".9rem"
              h1SizeS=".9rem"
              h1SizeXS=".9rem"
              h1Color={color.white}
              h1Weight="400"
            >
              <h1>{title}</h1>
            </PlainText>
          </Block>

          <Block>
            <SelectLanguage>
              <h3>Language :</h3>
              <ul>
                <li>
                  <a href={view.url('?lang=ja')} className={ language === 'ja' ? 'selected' : language === '' ? 'selected' : '' }>日本語</a>
                </li>
                <li>
                  <a href={view.url('?lang=vi')} className={ language === 'vi' ? 'selected': '' }>Tiếng Việt</a>
                </li>
              </ul>
            </SelectLanguage>
          </Block>
        </Columns>
      </Stacked>

      <Stacked paddingPos="none" color={color.white} wrap>
        <Menu>
          <Sitelogo href={view.url('')}>
            <img src={view.url('images/logo_biz.png')} alt="株式会社ビズソリューションズ" />
          </Sitelogo>

          <ul>
            <li>
              <h3>About us</h3>
              <ul>
                <li><a href={view.url('')}><span>外国人材群馬就職支援事業について</span></a></li>
                <li><a href={view.url('')}><span>ご挨拶</span></a></li>
                <li><a href={view.url('')}><span>会社概要</span></a></li>
              </ul>
            </li>
            <li>
              <h3>Service</h3>
            </li>
            <li>
              <h3>Contact</h3>
            </li>
          </ul>
        </Menu>
      </Stacked>
    </Component>
  );
};

const Component = styled.div`
`

const SelectLanguage = styled.div`
  display: flex;

  h3 {
    font-size: .9rem;
    font-weight: 400;
    color: var(--white);
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
      background-color: var(--white);
      transform: rotate(30deg);
    }
  }
}

a {
  padding: .25rem .5rem;
  text-decoration: none;
  color: var(--white);
  font-size: .9rem;

  &.selected, &:hover {
    color: var(--theme);
  }
}
`;

const Menu = styled.div`
  display: flex;
  align-items: center;

> ul {
  display: flex;
  align-items: center;
  margin-left: 1.5rem;
  list-style: none;

  h3 {
    display: block;
    padding: .5rem 1.5rem;
    font-size: 1rem;
    font-weight: 400;
    color: var(--black);
    text-decoration: none;
  }
}

> ul > li {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 75px;
  cursor: pointer;

  &:not(:first-child) {
    &:before {
      content: '';
      position: absolute;
      top: 40%;
      left: 0;
      display: block;
      width: 1px;
      height: calc(20%);
      background-color: var(--gray);
    }
  }

  > ul {
    position: fixed;
    z-index: 1;
    top: 99px;
    left: 0;
    transform: translateY(-100%);
    display: flex;
    width: 100vw;
    background-color: rgba(0, 0, 0, .6);
    list-style: none;
    opacity: 0;
    pointer-events: none;
    transition-duration: .3s;

    a {
      position: relative;
      display: flex;
      align-items: center;
      padding: 3rem;
      color: var(--white);
      text-decoration: none;

      span {
        transition-duration: .3s;
      }

      &:before {
        content: '';
        position: relative;;
        display: block;
        width: 18px;
        height: 18px;
        margin-right: 10px;
        background-image: url(${view.url('images/icon_arrow_theme.png')});
        background-size: contain;
      }

      &:hover {
        span {
          transform: translateX(.5em);
        }
      }
    }
  }

  &:hover {
    h3 {
      color: var(--gray);
    }

    ul {
      transform: translateY(0);
      pointer-events: auto;
      opacity: 1;
    }
  }
}
`;

const Sitelogo = styled.a`
  img {
    width: auto;
    height: 50px;
}
`;

export default Header;
