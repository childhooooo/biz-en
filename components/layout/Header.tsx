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
            <li><a href={view.url('about')}>About us</a></li>
            <li><a href={view.url('service')}>Service</a></li>
            <li><a href={view.url('contact')}>Contact</a></li>
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
  padding: .25rem 0;

ul {
  display: flex;
  align-items: center;
  margin-left: 1.5rem;
  list-style: none;

  a {
    display: block;
    padding: 0 1rem;
    font-weight: 700;
    color: var(--black);
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
}

li {
  position: relative;

  &:not(:first-child) {
    &:before {
      content: '';
      position: absolute;
      top: 15%;
      left: 0;
      display: block;
      width: 1px;
      height: calc(70%);
      background-color: var(--gray);
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
