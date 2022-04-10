import type { NextPage } from 'next';
import { Page, Stacked, Columns, Block, Figure, PlainText } from 'unflexible-ui-legacy';
import { Header, Footer } from 'components/layout';
import { PageTitle } from 'components/block';
import { Title06, FukidashiText, Button01 } from 'components/element';
import { color } from 'lib/config';

import { view } from 'unflexible-ui-legacy';

interface Props { }

const AboutMatchigPage: NextPage = ({ }: Props) => {
  const routes = [
    { name: 'TOP', href: view.url('') },
    { name: 'About', href: view.url('about') },
    { name: '外国人材就職応援サービスについて', href: view.url('about/matchig') }
  ];

  return (
    <Page
      title="外国人材就職応援サービスについて | 群馬外国人材就職支援事業（株式会社ビズソリューションズ）"
      description=""
      path="/about/matchig"
      ogType="article"
      header={(
        <Header
          title="外国人材就職応援サービスについて | 群馬外国人材就職支援事業（株式会社ビズソリューションズ）"
          language="ja"
        />
      )}
      footer={<Footer />}
      fixHeader
    >
      <Stacked paddingPos="none" color={color.lightGray} isSection>
        <PageTitle
          routes={routes}
        />
      </Stacked>

      <Stacked paddingPos="none" color={color.lightGray} isSection>
        <Block width="100%">
          <Figure
            name="アイキャッチ"
            src={view.url('mv_matching@1500.jpg')}
            srcSet={`${view.url('images/mv_matching@2000.jpg')} 2000w, ${view.url('images/mv_matching@1500.jpg')} 1500w, ${view.url('images/mv_matching@1250.jpg')} 1250w, ${view.url('images/mv_matching@750.jpg')} 750w`}
          />
        </Block>
      </Stacked>

      <Stacked isSection wrap>
        <Stacked paddingPos="none">
          <Columns justify="center">
            <Figure src={view.url('images/logo_en.png')} width="200px" widthS="160px" widthXS="120px" />
          </Columns>
        </Stacked>

        <Stacked paddingPos="top" paddingSize="thin">
          <Title06 name="日本で働く外国のための転職・就職応援マッチングサイトです" tag="h2" />
        </Stacked>

        <Stacked paddingPos="top">
          <PlainText>
            <p>「EN」は、株式会社ビズソリューションズが運営するサイトで、あなたと外国人を採用したい群馬の企業をつなぎます。</p>
            <p>在留資格が「技術・人文知識・国際業務」の方や「留学生」の方には、群馬の「技術力を活かせる求人」「語学力を活かせる求人」企業への就職をサポートします。</p>
            <p>在留資格が「特定技能1号」「技能実習2号修了予定者」の方には、同一職種で、また、異なる職種への就職を希望される方や「留学生」の方には、には、職種ごとの業界団体が実施する「特定技能試験」の合格を目指すことで、群馬の企業への就職をサポートします。</p>
            <p>在留資格が「永住者」「定住者」「日本人の配偶者等」の方には、「資格や経験が活かせる求人」から「軽作業・単純労働の求人」まで、正社員・パートタイム・派遣スタッフなど自分の仕事スタイルに合う企業への就職をサポートします。</p>
          </PlainText>
        </Stacked>

        <Stacked paddingPos="top" paddingSize="normal">
          <PlainText baseColor={color.gold} baseSizeXL="1.25rem" baseSizeS="1rem" baseLineHeight="1.5" baseAlign="center">
            <p>求人企業とのマッチングサービスを無料で受けることができます。 今すぐ登録をしょう！</p>
          </PlainText>
        </Stacked>

        <Stacked paddingPos="top" paddingSize="normal">
          <FukidashiText fukidashi={view.url('images/icon_matching_registration.png')} text="登録後、マイページから興味・関心のある求人にマッチングエントリーができます。サービス利用に関し、費用は一切発生しません（無料）。" />
        </Stacked>

        <Stacked paddingPos="top" paddingSize="thin">
          <Columns justify="center">
            <Figure src={view.url('images/arrow_sky.png')} width="50px" />
          </Columns>
        </Stacked>

        <Stacked paddingPos="top" paddingSize="thin">
          <FukidashiText fukidashi={view.url('images/icon_matching_interview.png')} text="当社の就職支援スタッフとのWEB面談を行います。WEB面談ではスキルやキャリア、就職希望時期などのヒヤリングを行い、応募書類を作成します。" />
        </Stacked>

        <Stacked paddingPos="top" paddingSize="thin">
          <Columns justify="center">
            <Figure src={view.url('images/arrow_sky.png')} width="50px" />
          </Columns>
        </Stacked>

        <Stacked paddingPos="top" paddingSize="thin">
          <FukidashiText fukidashi={view.url('images/icon_matching_screening.png')} text="マッチングエントリーした求人企業にて、書類選考を行います。選考の結果を当社より、にご連絡します。" />
        </Stacked>

        <Stacked paddingPos="top" paddingSize="thin">
          <Columns justify="center">
            <Figure src={view.url('images/arrow_sky.png')} width="50px" />
          </Columns>
        </Stacked>

        <Stacked paddingPos="top" paddingSize="thin">
          <FukidashiText fukidashi={view.url('images/icon_matching_selection.png')} text="応募先企業と面接を対面またはWEBで行います。面接後、採用の可否については、企業さまから直接、または当社よりご連絡します。" />
        </Stacked>

        <Stacked paddingPos="top" paddingSize="thin">
          <Columns justify="center">
            <Figure src={view.url('images/arrow_sky.png')} width="50px" />
          </Columns>
        </Stacked>

        <Stacked paddingPos="top" paddingSize="thin">
          <FukidashiText fukidashi={view.url('images/icon_matching_support.png')} text="就労スタートまで、新しい環境での生活づくりのサポートをします。" />
        </Stacked>

        <Stacked paddingPos="top" paddingSize="normal">
          <Columns justify="center">
            <Block width="400px" widthS="100%">
              <Button01 name="求職者登録はこちら" href={view.url('service/matching/seeker/new')} />
            </Block>
          </Columns>
        </Stacked>
      </Stacked>
    </Page>
  );
};

export default AboutMatchigPage;
