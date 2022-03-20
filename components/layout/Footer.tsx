import { Stacked, Columns, Block, PlainText } from 'unflexible-ui-legacy';

import styled from 'styled-components';
import { view } from 'unflexible-ui-legacy';
import { color } from 'lib/config';

interface Props {
}

const Footer = ({}: Props) => {
  return (
    <Component>
      <Stacked wrap>
        <Stacked paddingPos="none">
          <Columns repeat={5}>
            <Block>
              <h3>About us</h3>
              <Menu>
                <li>
                  <a href={view.url('')}>外国人材群馬就職支援事業とは</a>
                </li>
                <li>
                  <a href={view.url('')}>ご挨拶</a>
                </li>
                <li>
                  <a href={view.url('')}>外国人材就職応援サイトについて</a>
                </li>
                <li>
                  <a href={view.url('')}>会社概要</a>
                </li>
              </Menu>
            </Block>

            <Block>
              <h3>Service</h3>
              <Menu>
                <li>
                  <a href={view.url('')}>外国人材就職応援サイト</a>
                </li>
                <li>
                  <a href={view.url('')}>外国人材採用支援サービス</a>
                </li>
                <li>
                  <a href={view.url('')}>日本語レッスン</a>
                </li>
                <li>
                  <a href={view.url('')}>求職者登録でできること</a>
                </li>
                <li>
                  <a href={view.url('')}>求人企業登録でできること</a>
                </li>
              </Menu>
            </Block>

            <Block>
              <Stacked paddingPos="none">
                <h3>Contact</h3>
                <Menu>
                  <li>
                    <a href={view.url('')}>お問い合わせフォーム</a>
                  </li>
                </Menu>
              </Stacked>

              <Stacked paddingPos="top" paddingSize="narrow">
                <h3>Link</h3>
                <Menu>
                  <li>
                    <a href={view.url('')}>国際共生事業協同組合</a>
                  </li>
                </Menu>
              </Stacked>
            </Block>

            <Block>
              <h3>Policy</h3>
              <Menu>
                <li>
                  <a href={view.url('')}>プライバシーポリシー</a>
                </li>
              </Menu>
            </Block>

            <Block>
              <Stacked>
                <Socials>
                  <li>
                    <a href={view.url('')}>
                      <img src={view.url('images/icon_twitter.png')} alt="Twitter" />
                    </a>
                  </li>

                  <li>
                    <a href={view.url('')}>
                      <img src={view.url('images/icon_facebook.png')} alt="Twitter" />
                    </a>
                  </li>
                </Socials>
              </Stacked>
            </Block>
          </Columns>
        </Stacked>

        <Stacked paddingPos="none">
          <Columns align="flex-end" justify="space-between">
            <Block>
              <PlainText>
                <p>©2021 Biz Solutions Co., Ltd. All Rights Reserved.</p>
              </PlainText>
            </Block>

            <Block>
              <PlainText baseAlign="right">
                <p>
                  株式会社ビズソリューションズ<br/>
                  〒370-1301 群馬県高崎市新町3044-2<br/>
                  TEL: 027-329-7846 FAX: 027-329-6901
                </p>
              </PlainText>
            </Block>
          </Columns>
        </Stacked>
      </Stacked>
    </Component>
  );
};

const Component = styled.div`
  border-top: 5px solid ${color.lightPurple};
`

const Menu = styled.ul`
  margin-top: 1rem;
  padding-left: .5rem;
  list-style: none;
  line-height: 2;

  h3 {
    font-size: 1.25rem;
    font-weight: 700;
  }

  a {
    color: ${color.black};
    font-size: .9rem;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Socials = styled.ul`
  display: flex;
  justify-content: center;
  width: 100%;
  list-style: none;

  li {
    &:not(:first-child) {
      margin-left: .75rem;
    }
  }

img {
  width: 40px;
}
`;

export default Footer;
