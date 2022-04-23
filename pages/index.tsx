import type { NextPage } from 'next';
import { Page, Stacked, Columns, Block, Figure, PlainText } from 'unflexible-ui-legacy';
import { Header, Footer } from 'components/layout';
import { Link, Parallax } from 'components/container';
import { MainVisual, CTA } from 'components/block';
import { Title02, Button01, ServiceLink } from 'components/element';
import { color } from 'lib/config';

import { view } from 'unflexible-ui-legacy';

interface Props { }

const Home: NextPage = ({ }: Props) => {
  return (
    <Page
      title="外国人材群馬就職支援事業（株式会社ビズソリューションズ）"
      description=""
      path="/"
      ogType="website"
      header={(
        <Header
          title="外国人材群馬就職支援事業（株式会社ビズソリューションズ）"
          language="ja"
        />
      )}
      footer={<Footer />}
      fixHeader
    >
      <Stacked paddingPos="none" isSection>
        <MainVisual />
      </Stacked>

      <Stacked paddingSize="thin" isSection>
        <Link href={view.url('service/matching')}>
          <Stacked paddingSize="thin" wrap>
            <Columns align="center" gap="narrow">
              <Block width="150px" widthM="120px" widthS="100px" widthXS="60px">
                <Figure src={view.url('images/logo_en.png')} name="縁 -en-" />
              </Block>

              <Block>
                <PlainText h2SizeXL="1rem" h2SizeL="1rem" h2SizeM=".9rem" h2SizeS=".9rem" h2SizeXS=".7rem" h2Weight="400">
                  <h2>群馬県内に就職を希望する外国人材就職応援サイト</h2>
                </PlainText>
              </Block>
            </Columns>
          </Stacked>

          <Stacked paddingSize="thin" color={color.blue} wrap>
            <PlainText h3Color={color.white} h3Weight="400" h3SizeXL="1.25rem" h3SizeL="1.25rem" h3SizeM="1rem" h3SizeS="1rem" h3SizeXS="1rem">
              <h3>求人情報検索</h3>
            </PlainText>
          </Stacked>

          <Stacked paddingPos="none" wrap>
            <Figure
              src={view.url('images/index_en@1500.png')}
              srcSet={`${view.url('images/index_en@2000.png')} 2000w, ${view.url('images/index_en@1500.png')} 1500w, ${view.url('images/index_en@1250.png')} 1250w, ${view.url('images/index_en@750.png')} 750w`}
              width="100%"
            />
          </Stacked>
        </Link>
      </Stacked>

      <Stacked color={color.theme} wrap isSection>
        <Columns justify="center">
          <Block width="80%">
            <Columns repeat={2} repeatS={1} gap="wide" gapM="normal">
              <Block>
                <Button01 name="求職者登録はこちら" kind="link" href={view.url('service/matching/seeker/new')} />
              </Block>

              <Block>
                <Button01 name="求人企業登録はこちら" kind="link" href={view.url('service/matching/employer/new')} />
              </Block>
            </Columns>
          </Block>
        </Columns>
      </Stacked>

      <Stacked paddingPos="none" isSection>
        <Stacked paddingPos="none">
          <Columns repeat={3} repeatS={1}>
            <Block>
              <ServiceLink
                href={view.url('about/matching')}
                name="技術・人文知識・国際業務"
                details="大学の専攻分野の知識やキャリアを活かして群馬の企業に就職する"
                image={view.url('images/index_service_01.jpg')}
              />
            </Block>

            <Block>
              <ServiceLink
                href={view.url('about/matching')}
                name="特定技能"
                details="技能実習生から移行、留学生から試験に合格して群馬の企業に就職する"
                image={view.url('images/index_service_02.jpg')}
              />
            </Block>

            <Block>
              <ServiceLink
                href={view.url('about/matching')}
                name="永住者・定住者・日本人の配偶者等"
                details="正社員・パートタイム・派遣等自分に合う仕事スタイルで群馬で働く"
                image={view.url('images/index_service_03.jpg')}
              />
            </Block>
          </Columns>
        </Stacked>
      </Stacked>

      <Stacked paddingPos="none" isSection>
        <Link href={view.url('service')}>
          <Stacked paddingSize="normal" wrap>
            <Title02 name="群馬県内に就職を希望する外国人材の就職をサポートします" en="SERVICE" tag="h2" />
          </Stacked>

          <Stacked paddingPos="none">
            <Parallax
              image={view.url('images/index_back_service@1500.jpg')}
              srcSet={`${view.url('images/index_back_service@2000.jpg')} 2000w, ${view.url('images/index_back_service@1500.jpg')} 1500w, ${view.url('images/index_back_service@1250.jpg')} 1250w, ${view.url('images/index_back_service@750.jpg')} 750w`}
            >
              <PlainText baseAlign="center" baseLineHeight="2" baseSizeS=".9rem" h2SizeS="1.25rem" h2Align="center" h2Weight="400" h2Color={color.gold}>
                <h2>
                  地域産業に外国人材パワーを提供<br />
                  初期費用0円の外国人材紹介サービス
                </h2>
                <p>
                  採用が成功するまで料金はかかりません。<br />
                  低リスクで効率的な採用活動を実現できます。<br />
                  専門性の高い人材から工場や現場で働く若年層の人材まで、<br />
                  外国人材の多様な求人ニーズに対応いたします。
                </p>
              </PlainText>
            </Parallax>
          </Stacked>
        </Link>
      </Stacked>

      <Stacked paddingPos="bottom" paddingSize="normal" isSection>
        <Link href={view.url('about')}>
          <Stacked paddingSize="normal" color={color.lightGray} wrap>
            <Title02 name="多文化共生社会の実現に向けた取り組みを応援しています群馬県内に就職を希望する外国人材を支援します" en="ABOUT US" tag="h2" />
          </Stacked>

          <Stacked paddingPos="none">
            <Parallax
              image={view.url('images/index_back_about@1500.jpg')}
              srcSet={`${view.url('images/index_back_about@2000.jpg')} 2000w, ${view.url('images/index_back_about@1500.jpg')} 1500w, ${view.url('images/index_back_about@1250.jpg')} 1250w, ${view.url('images/index_back_about@750.jpg')} 750w`}
            >
              <PlainText baseLineHeight="2">
                <p>
                  外国人材群馬就職支援事業では、ベトナム国の送出機関と連携して、外国人材の採用に意欲的な群馬県内企業さま向けに人材採用支援サービスを展開しております。日本での就職を希望する東南アジア諸国の若者や留学生の方たちに対して、技術・人文知識・国際業務、特定技能、技能実習生の在留資格で群馬県内への就職を応援しています。また、国内で活躍する外国人材や留学生と企業とをつなぐマッチングサービスで地域産業の人材のグローバル化を推進し、外国人材と地域社会が共に豊かで活力ある多文化共生社会の実現を目指しています。
                </p>
              </PlainText>
            </Parallax>
          </Stacked>
        </Link>

        <Stacked paddingPos="none" isSection>
          <Link href={view.url('contact')}>
            <Stacked paddingSize="normal" wrap>
              <Title02 name="当社へのお問い合わせはこちらからどうぞ" en="CONTACT" tag="h2" />
            </Stacked>
          </Link>

          <Stacked paddingPos="none">
            <CTA />
          </Stacked>
        </Stacked>
      </Stacked>
    </Page>
  );
};

export default Home;
