import { Stacked, Columns, Block, PlainText } from 'unflexible-ui-legacy';

import styled from 'styled-components';
import { view } from 'unflexible-ui-legacy';
import { color, font, screen } from 'lib/config';

interface Props {
}

const Footer = ({}: Props) => {
  return (
    <Component>
      <Stacked wrap>
        <Stacked paddingPos="none">
          <Columns repeat={5} repeatL={4} repeatM={3} repeatS={2} repeatXS={1} gap="normal">
            <Block>
              <h3>About us</h3>
              <Menu>
                <li>
                  <a href={view.url('about/description')}>群馬外国人材就職支援事業とは</a>
                </li>
                <li>
                  <a href={view.url('about/greeting')}>ご挨拶</a>
                </li>
                <li>
                  <a href={view.url('about/matching')}>外国人材就職応援サイトについて</a>
                </li>
                <li>
                  <a href={view.url('about/company')}>会社概要</a>
                </li>
              </Menu>
            </Block>

            <Block>
              <h3>Service</h3>
              <Menu>
                <li>
                  <a href={view.url('service/matching')}>外国人材就職応援サイト</a>
                </li>
                <li>
                  <a href={view.url('service/staff-agency')}>外国人材採用支援サービス</a>
                </li>
                <li>
                  <a href={view.url('service/lesson')}>日本語レッスン</a>
                </li>
                <li>
                  <a href={view.url('service/matching/seeker')}>求職者登録でできること</a>
                </li>
                <li>
                  <a href={view.url('service/matching/employer')}>求人企業登録でできること</a>
                </li>
              </Menu>
            </Block>

            <Block>
              <Stacked paddingPos="none">
                <h3>Contact</h3>
                <Menu>
                  <li>
                    <a href={view.url('contact')}>お問い合わせフォーム</a>
                  </li>
                </Menu>
              </Stacked>

              <Stacked paddingPos="top" paddingSize="narrow">
                <h3>Link</h3>
                <Menu>
                  <li>
                    <a href={view.url('')} target="_blank" rel="noreferrer">国際共生事業協同組合</a>
                  </li>
                </Menu>
              </Stacked>
            </Block>

            <Block>
              <h3>Policy</h3>
              <Menu>
                <li>
                  <a href={view.url('privacy-policy')}>プライバシーポリシー</a>
                </li>
              </Menu>
            </Block>

            <Block>
              <Stacked>
                <Socials>
                  <li>
                    <a href={view.url('')} target="_blank" rel="noreferrer">
                      <img src={view.url('images/icon_twitter.png')} alt="Twitter" />
                    </a>
                  </li>

                  <li>
                    <a href={view.url('')} target="_blank" rel="noreferrer">
                      <img src={view.url('images/icon_facebook.png')} alt="Facebook" />
                    </a>
                  </li>
                </Socials>
              </Stacked>
            </Block>
          </Columns>
        </Stacked>

        <Stacked paddingPos="none">
          <Foot>
            <Block>
              <PlainText baseFamily={font.sansSerif}>
                <p>©2021 Biz Solutions Co., Ltd. All Rights Reserved.</p>
              </PlainText>
            </Block>

            <Block>
            <PlainText baseAlign="right" baseFamily={font.sansSerif}>
                <p>
                  株式会社ビズソリューションズ<br/>
                  〒370-1301 群馬県高崎市新町3044-2<br/>
                  TEL: 027-329-7846 FAX: 027-329-6901
                </p>
              </PlainText>
            </Block>
          </Foot>
        </Stacked>
      </Stacked>
    </Component>
  );
};

const Component = styled.div`
  border-top: 5px solid ${color.lightPurple};

  h3 {
    font-size: 1rem;
    font-family: ${font.sansSerif};
    font-weight: 700;
  }
`

const Menu = styled.ul`
  margin-top: 1rem;
  padding-left: .5rem;
  list-style: none;
  line-height: 2;

  a {
    color: ${color.black};
    font-size: .9rem;
    font-family: ${font.sansSerif};
    text-decoration: none;
    color: ${color.darkGray};

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

  @media only screen and (max-width: ${screen.l}px) {
    justify-content: flex-start;
  }
`;

const Foot = styled.div`
display: flex;
justify-content: space-between;
align-items: flex-end;

@media only screen and (max-width: ${screen.m}px) {
  flex-direction: column-reverse;

  * {
    font-size: .8rem;
    text-align: right !important;
  }
}
`;

export default Footer;
