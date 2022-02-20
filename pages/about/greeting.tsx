import type { NextPage } from 'next';
import { Page, Stacked, Columns, Block, PlainText, Figure } from 'unflexible-ui-legacy';
import { Header, Footer } from 'components/layout';
import { PageTitle, List01 } from 'components/block';
import { color } from 'lib/config';

import { view } from 'unflexible-ui-legacy';

interface Props {}

const AboutGreetingPage: NextPage = ({}: Props) => {
  const routes = [
    { name: 'TOP', href: view.url('') },
    { name: 'About us', href: view.url('about') },
    { name: 'ご挨拶', href: view.url('about/greeting') }
  ];

  return (
    <Page
      title="ご挨拶 | 縁 -en-"
      description=""
      path="/about/greeting"
      ogType="article"
      header={(
        <Header
          title="ご挨拶 | 外国人材群馬支援事業（株式会社ビズソリューションズ）"
          language="ja"
        />
      )}
      footer={<Footer/>}
      fixHeader
    >
      <Stacked paddingPos="none" color={color.lightGray} isSection>
        <PageTitle
          name="ご挨拶"
          routes={routes}
        />
      </Stacked>

      <Stacked paddingSize="narrow" isSection wrap>
        <PlainText baseMargin="2rem 0">
          <p>私たちは、人材採用支援事業と広報支援事業の二つを柱に、コンサルティング業務を行い、地元群馬の企業さまが抱える課題解決のお手伝いをさせていただいております。<br/>主に、工場・作業現場での人材不足、専門分野における優秀な技術者の獲得難など、人材課題に対応した外国人材採用支援サービスと、新卒採用に関する企画立案からペーパーメディア・WEBページの制作までを行っております。<br/>外国人材採用支援サービスでは、特定技能外国人の登録支援機関として、職業生活・社会生活上の支援業務の受託およびベトナム国の送出し機関と連携した機械・電気・電子・情報系外国人エンジニアの募集と国内在住の外国人定住者、留学生を対象に人材を募集し、企業さまのご依頼に最適な候補者をご紹介しております。</p>
          <p>私たちは、将来を見据えて、若年層労働人口減少に対処していくため、地域企業さまへの外国人材活用促進に取り組んでおり、事業活動を通して、受入企業さまと働く外国人材の方たち双方にご満足いただけるよう努めてまいります。<br/>地元群馬で30年以上、人材ビジネスに携わってきた経験を活かし、地域企業の生産性向上と地域経済の持続可能な発展、多文化共生社会の実現に向けた取り組みを応援してまいります。</p>
        </PlainText>
      </Stacked>

      <Stacked isSection wrap>
        <Columns repeatXL={2} gap="wide" align="center">
          <Block height="100%" fixHeight>
            <Figure src={view.url('images/greeting_01.jpg')} width="100%" height="100%"/>
          </Block>

          <Block>
            <PlainText>
              <p>株式会社ビズソリューションズ<br/>代表取締役　藤井　正弘</p>
            </PlainText>
          </Block>
        </Columns>
      </Stacked>

      <Stacked isSection wrap>
        <List01 name="企業理念" en="Corporate philosophy">
          <li>人材採用支援を通じて、地域経済発展の一翼を担うこと</li>
          <li>関連法令を遵守し誠実に外国人材の就職支援を行うこと</li>
          <li>多文化共生に向けた「地域づくり」に貢献すること</li>
        </List01>
      </Stacked>

      <Stacked>
      </Stacked>
    </Page>
  );
};

export default AboutGreetingPage;
