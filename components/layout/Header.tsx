import { Stacked, Columns, Block, PlainText } from 'unflexible-ui-legacy';

import { useState } from 'react';
import styled from 'styled-components';
import { view } from 'unflexible-ui-legacy';
import { color, font, screen } from 'lib/config';

interface Props {
  title: string;
  language?: string;
  selected?: string;
}

const Header = ({ title, language, selected }: Props) => {
  const [expanded, setExpanded] = useState(false);

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

      <Stacked paddingPos="none" color={color.white} wrap>
        <Menu expanded={expanded}>
          <Sitelogo href={view.url('')}>
            <img src={view.url('images/logo_biz.png')} alt="株式会社ビズソリューションズ" />
          </Sitelogo>

          <ul>
            <li>
              <h3 className={selected === 'about' ? 'selected' : ''}><a href={view.url('about')}>About us</a></h3>
              <ul>
                <li>
                  <a href={view.url('about/description')}><span>外国人材群馬就職支援事業について</span></a>
                </li>
                <li>
                  <a href={view.url('about/greeting')}><span>ご挨拶</span></a>
                </li>
                <li>
                  <a href={view.url('about/matching')}><span>外国人材就職応援サイトについて</span></a>
                </li>
                <li>
                  <a href={view.url('about/company')}><span>会社概要</span></a>
                </li>
              </ul>
            </li>
            <li>
              <h3 className={selected === 'service' ? 'selected' : ''}><a href={view.url('service')}>Service</a></h3>
              <ul>
                <li>
                  <a href={view.url('service/matching')}><span>外国人材就職応援サイト</span></a>
                </li>
                <li>
                  <a href={view.url('service/staff-agency')}><span>外国人材採用支援サービス</span></a>
                </li>
                <li>
                  <a href={view.url('service/lesson')}><span>日本語レッスン</span></a>
                </li>
                <li>
                  <a href={view.url('service/matching/seeker')}><span>求職者登録でできること</span></a>
                </li>
                <li>
                  <a href={view.url('service/matching/employer')}><span>求人企業登録でできること</span></a>
                </li>
              </ul>
            </li>
            <li>
              <h3 className={selected === 'contact' ? 'selected' : ''}><a href={view.url('contact')}>Contact</a></h3>
            </li>
          </ul>

          <Expand expanded={expanded} onClick={() => setExpanded(v => !v)}>
            <span></span>
            <span></span>
            <span></span>
          </Expand>
        </Menu>
      </Stacked>
    </Component>
  );
};

const Component = styled.div`
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

interface MenuProps {
  expanded: boolean;
}

const Menu = styled.div<MenuProps>`
  display: flex;
  align-items: center;

  @media only screen and (max-width: ${screen.s}px) {
    justify-content: space-between;
    padding: .25rem 0;
  }

> ul {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  margin-left: 1.5rem;
  list-style: none;

  h3 {
    display: block;
    padding: .5rem 1.5rem;
    font-size: 1rem;
    font-family: ${font.sansSerif};
    font-weight: 400;
    color: ${color.black};
    text-decoration: none;

    a {
      color: ${color.black};
      text-decoration: none;
    }

    &.selected {
      a {
        color: ${color.gray};
      }
    }
  }
}

@media only screen and (max-width: ${screen.m}px) {
  > ul {
    h3 {
      padding: 2rem;
    }
  }
}

@media only screen and (max-width: ${screen.s}px) {
  > ul {
    position: fixed;
    top: 0;
    left: 0;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 100vw;
    height: 100vh;
    margin: 0;
    background-color: ${color.white};
    transition-duration: .5s;
    transform: translateX(100%);
    ${p => p.expanded && 'transform: translateX(0);'}

    h3 {
      padding: .5rem;
    }
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
      background-color: ${color.gray};
    }
  }

  > ul {
    position: fixed;
    z-index: 1;
    top: 97px;
    left: 0;
    transform: translateY(-100%);
    display: flex;
    flex-wrap: wrap;
    width: 100vw;
    padding: 1.5rem;
    background-color: rgba(0, 0, 0, .6);
    list-style: none;
    opacity: 0;
    pointer-events: none;
    transition-duration: .3s;

    a {
      position: relative;
      display: flex;
      align-items: center;
      padding: 1.5rem;
      color: ${color.white};
      font-family: ${font.sansSerif};
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
      color: ${color.gray};
    }

    > ul {
      transform: translateY(0);
      pointer-events: auto;
      opacity: 1;
    }
  }
}

@media only screen and (max-width: ${screen.m}px) {
  > ul > li {
    height: 50px;

    > ul {
      top: 72px;
      flex-wrap: wrap;

      a {
        padding: 1.5rem 1rem;
        font-size: .9rem;
      }
    }
  }
}

@media only screen and (max-width: ${screen.s}px) {
  > ul > li {
    display: block;
    height: auto;
    padding: .5rem;

    &:before {
      display: none !important;
    }

    > ul {
      position: relative;
      top: 0;
      left: 0;
      width: auto;
      padding: .5rem;
      transform: translateY(0);
      display: block;
      background-color: transparent;
      opacity: 1;
      pointer-events: auto;

      a {
        padding: 1rem;
        color: ${color.black};
      }
    }
  }
}
`;

const Sitelogo = styled.a`
  position: relative;
  z-index: 1;

  img {
    width: auto;
    height: 50px;
  }

  @media only screen and (max-width: ${screen.m}px) {
    img {
      height: 36px;
    }
  }

  @media only screen and (max-width: ${screen.s}px) {
    img {
      height: 30px;
    }
  }
`;

interface ExpandProps {
  expanded: boolean;
}

const Expand = styled.button<ExpandProps>`
position: relative;
display: none;

@media only screen and (max-width: ${screen.s}px) {
  display: block;
  z-index: 3;
  display: inline-block;
  width: 32px;
  height: 26px;
  cursor: pointer;
  transition: all .5s;

  span {
    position: absolute;
    left: 0;
    width: 100%;
    height: 3px;
    background-color: ${color.theme};
    border-radius: 4px;
  }

  span:nth-of-type(1) {
    top: 0;
  }

  span:nth-of-type(2) {
    top: 12px;
  }

  span:nth-of-type(3) {
    bottom: 0;
  }

  ${p => p.expanded && `
    transform: rotate(360deg);

    span:nth-of-type(1) {
      transform: translateY(12px) rotate(-45deg);
    }

    span:nth-of-type(2) {
      transform: translateY(0) rotate(45deg);
    }

    span:nth-of-type(3) {
      opacity: 0;
    }
  `}
}
`;

export default Header;
