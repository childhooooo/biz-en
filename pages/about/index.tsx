import type { NextPage } from 'next';
import { Page, Stacked, Columns, Block } from 'unflexible-ui-legacy';
import { Header, Footer } from 'components/layout';
import { PageTitle } from 'components/block';
import { MenuLink } from 'components/element';
import { color } from 'lib/config';

import { view } from 'unflexible-ui-legacy';

interface Props {}

const AboutPage: NextPage = ({}: Props) => {
  const routes = [
    { name: 'TOP', href: view.url('') },
    { name: 'About us', href: view.url('about') }
  ];

  return (
    <Page
      title="外国人材群馬就職支援事業について | 縁 -en-"
      description=""
      path="/about"
      ogType="article"
      header={(
        <Header
          title="外国人材群馬就職支援事業ついて | 外国人材群馬支援事業（株式会社ビズソリューションズ）"
          language="ja"
        />
      )}
      footer={<Footer/>}
      fixHeader
    >
      <Stacked paddingPos="none" color={color.lightGray} isSection>
        <PageTitle
          name="外国人材群馬就職支援事業について"
          routes={routes}
        />
      </Stacked>

      <Stacked paddingSize="narrow" color={color.lightGray} isSection wrap>
        <Columns repeat={3} gap="normal">
          <Block height="100%">
            <MenuLink
              name="外国人材群馬就職支援事業とは"
              href={view.url('about/description')}
              image={view.url('images/about_link_about.png')}
              overview="群馬県内に就職を希望する外国人材を支援する取組などを紹介しています。"
            />
          </Block>

          <Block height="100%">
            <MenuLink
              name="ご挨拶"
              href={view.url('about/greeting')}
              image={view.url('images/about_link_greeting.png')}
              overview="代表取締役社長　藤井正弘"
            />
          </Block>

          <Block height="100%">
            <MenuLink
              name="外国人材就職応援サービス"
              href={view.url('about/support')}
              image={view.url('images/about_link_support.png')}
              overview="株式会社ビズソリューションズが運営するサイトで、あなたと外国人を採用したい群馬の企業をつなぎます。"
            />
          </Block>

          <Block height="100%">
            <MenuLink
              name="会社概要"
              href={view.url('about/company')}
              overview="当社の概要やアクセスマップについてご確認いただけます。"
            />
          </Block>
        </Columns>
      </Stacked>
    </Page>
  );
};

export default AboutPage;
