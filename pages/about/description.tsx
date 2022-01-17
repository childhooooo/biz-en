import type { NextPage } from 'next';
import { Page, Stacked, Columns, Block, PlainText, Figure } from 'unflexible-ui';
import { Header, Footer } from 'components/layout';
import { PageTitle, ServiceCircle, Match } from 'components/block';
import { Title03 } from 'components/element';
import { color } from 'lib/config';

import { view } from 'unflexible-ui';

interface Props {}

const AboutDescriptionPage: NextPage = ({}: Props) => {
  const routes = [
    { name: 'TOP', href: view.url('') },
    { name: 'About us', href: view.url('about') },
    { name: '外国人材群馬就職支援事業とは', href: view.url('about/description') }
  ];

  return (
    <Page
      title="外国人材群馬就職支援事業とは | 縁 -en-"
      description=""
      path="/about/description"
      ogType="article"
      header={(
        <Header
          title="外国人材群馬就職支援事業とは | 外国人材群馬支援事業（株式会社ビズソリューションズ）"
          language="ja"
        />
      )}
      footer={<Footer/>}
      fixHeader
    >
      <Stacked paddingPos="none" color={color.lightGray} isSection>
        <PageTitle
          name="外国人材群馬就職支援事業とは"
          routes={routes}
        />
      </Stacked>

      <Stacked paddingPos="top" paddingSize="narrow" isSection wrap>
        <Stacked paddingPos="none">
          <Columns justify="center">
            <Block>
              <ServiceCircle />
            </Block>
          </Columns>
        </Stacked>

        <Stacked paddingSize="narrow">
          <PlainText>
            <p>私たちは、日本で働くことを希望する東南アジアの若者たちと、優秀な人材を求める企業さまの求職・求人のマッチングサービスを行っています。外国人材の定着支援や生活支援など、受入企業さまと働く外国人材の方たち双方が満足いただけるサポートご提供いたします。</p>
          </PlainText>
        </Stacked>
      </Stacked>

      <Stacked paddingPos="top" wrap>
        <PlainText h3Align="center" h3Weight="400" h3Color={color.gold}>
          <h3>･･･海外から日本に来て働くことが可能な主な在留資格･･･</h3>
        </PlainText>
      </Stacked>

      <Stacked paddingPos="top" isSection>
        <Stacked paddingPos="none" wrap>
          <Title03 name="技術・人文知識・国際業務" icon={view.url('images/icon_people.png')} tag="h4" color={color.purple} />
        </Stacked>

        <Stacked paddingSize="narrow" wrap>
          <PlainText>
            <p>大学や、専門学校で学んだ知識（専攻科目・履修内容）や母国の企業で培ってきた経験や知識と、就職する企業での職務内容が関連している場合に取得できる在留資格です。学んだ知識や経験に応じて、理系ではエンジニアやプログラマー、文系では営業職や事務職、翻訳・通訳など。単純労働などの仕事に就くことはできません。この在留資格の取得要件として、学歴では大学または短期大学（国内外不問）を卒業（予定）者。専門学校の場合は日本国内の専門学校である必要があります。学歴が高卒以下の場合は、3年または10年以上の実務経験が必要となります。在留期間は、申請した在留資格と申請者の状況に応じて、5年、3年、1年、3ヶ月のうちのいずれかを入管が決定します。</p>
          </PlainText>
        </Stacked>

        <Stacked paddingSize="narrow" color={color.whitePurple} wrap>
          <PlainText baseMargin="1rem 2rem">
            <p>企業さまのご要望にマッチする外国人材をベトナムで募集し候補者としてご紹介いたします。また、既に国内で活躍する外国人材や国内での就職を希望する留学生（専門学校以上）をご紹介いたします。</p>
          </PlainText>
        </Stacked>
      </Stacked>

      <Stacked paddingPos="top" isSection>
        <Stacked paddingPos="none" wrap>
          <Title03 name="特定技能" icon={view.url('images/icon_people.png')} tag="h4" color={color.purple} />
        </Stacked>

        <Stacked paddingSize="narrow" wrap>
          <PlainText>
            <p>受け入れ可能な業種は「特定産業分野」14業種（介護、産業機械製造業、電気・電子情報関連産業、建設業、自動車整備業、宿泊業、農業、飲食料品製造業、外食業、ビルクリーニング、素形材産業など）に制限されています。一定の専門性・技能を有し、即戦力となる外国人材が対象です。「特定技能」には1号と2号があり、「特定技能１号」は技能実習2号修了者の場合、同じ職種であれば無試験で移行可能です。また、留学生などが「特定技能」の資格を取得する場合は、職種ごとの業界団体が実施する「特定技能試験」に合格する必要があります。技術・人文知識・国際業務との違いは、認可に「学歴」や「母国における関連業務への従事経験」が不要なことです。在留期間は、5年間です。</p>
          </PlainText>
        </Stacked>

        <Stacked paddingSize="narrow" color={color.whitePurple} wrap>
          <PlainText baseMargin="1rem 2rem">
            <p>「特定技能」の雇用では、「特定技能所属機関」としての支援や入管への定期的な報告義務があります。登録支援機関の当社が企業さまに代わって、支援の全てを受託して特定技能外国人をサポートいたします。</p>
          </PlainText>
        </Stacked>
      </Stacked>

      <Stacked paddingPos="top" isSection>
        <Stacked paddingPos="none" wrap>
          <Title03 name="インターンシップ" icon={view.url('images/icon_people.png')} tag="h4" color={color.purple} />
        </Stacked>

        <Stacked paddingPos="top" paddingSize="narrow" wrap>
          <PlainText>
            <p>海外の大学生または短大生が、職業経験を積むために日本国内の企業で働くことができる在留資格がインターンシップ（特定活動）です。資格認定の条件として、（1）大学・短大在籍中に専攻と関連性のある業務であること。（2）インターンシップ活動が教育課程の一部として行われている大学であること。（3）受け入れる企業との間でインターンシップに係る協定があること。（4）企業から報酬が支払われること。在留期間は、１年を超えない期間で、かつ通算して在籍する大学・短大の修業年限の2分の1を超えない期間です。インターン生は日本の受け入れ企業の「実習生」ですから、労働目的でのインターン参加はできません。</p>
          </PlainText>
        </Stacked>
      </Stacked>

      <Stacked paddingPos="top" isSection>
        <Stacked paddingPos="none" wrap>
          <Title03 name="技能実習" icon={view.url('images/icon_people.png')} tag="h4" color={color.purple} />
        </Stacked>

        <Stacked paddingSize="narrow" wrap>
          <PlainText>
            <p>技能実習制度は、実習生に技術や知識を修得させ、帰国後、母国の経済発展を担う「人づくり」に寄与することを目的としています。受入企業の97％以上が事業協同組合などの「監理団体」を通して実習生を受け入れています。従事する業務内容が移行対象職種・作業の「審査基準」に該当しなければなりません。「技能実習」には段階的に第1号・第2号・第3号があり第1号から第2号・3号に次段階の技能実習に進むには、技能検定または技能実習評価試験に合格する必要があります。尚、在留期間中に実習生の都合で受入企業（実習実施者）を変わることは出来ません。在留期間は、第1号は1年間。第2号・第3号はそれぞれ2年間で合計５年間の就労が可能です。</p>
          </PlainText>
        </Stacked>

        <Stacked paddingSize="narrow" color={color.whitePurple} wrap>
          <PlainText baseMargin="1rem 2rem">
            <p>「団体監理型技能実習」の場合、受入企業は「監理団体」を介して実習生を受け入れます。企業さまの受入準備から実習生の生活サポートまで、国際共生事業協同組合（監理団体）と連携し円滑な技能実習を支援します。</p>
          </PlainText>
        </Stacked>
      </Stacked>

      <Stacked paddingPos="both" isSection>
        <Stacked paddingPos="none" wrap>
          <Title03 name="留学（資格外活動許可）" icon={view.url('images/icon_people.png')} tag="h4" color={color.purple} />
        </Stacked>

        <Stacked paddingPos="top" paddingSize="narrow" wrap>
          <PlainText>
            <p>海外から日本国内の日本語学校や大学、短大、専門学校などで教育を受ける学生に認められる在留資格です。 日本国内での就職を希望する留学生の大半が、日本語学校で１年以上学び日本語能力検定N3以上を取得し、大学や専門学校に進学して専門分野の知識を修得します。専攻分野と就職する企業での職務内容が関連している場合は、「技術・人文知識・国際業務」の在留資格を得ることができます。また、日本語学校の留学生が「特定技能試験」に合格して「特定技能」の資格を取得して仕事に就くこともできます。留学生がアルバイトなどの仕事に就く場合、 「資格外活動許可」が必要になります。定められた労働時間を超えて働くと、就職にあたって、在留資格変更の審査で判明すると、素行不良で申請不許可となりますので、卒業後、日本国内での就職を希望される留学生は注意してください。</p>
          </PlainText>
        </Stacked>
      </Stacked>

      <Stacked paddingPos="top" wrap>
        <PlainText h3Align="center" h3Weight="400" h3Color={color.gold}>
          <h3>･･･海外から日本に来て働くことが可能な主な在留資格･･･</h3>
        </PlainText>
      </Stacked>

      <Stacked paddingPos="top" isSection wrap>
        <Stacked paddingPos="none">
          <Match target01="専門分野で優秀な人材を<br/>採用したい企業さま" target02="技・人・国の在留資格で<br/>働きたい外国人材" />
        </Stacked>

        <Stacked paddingPos="top" paddingSize="narrow">
          <PlainText h4Align="center" h4Weight="400" h4Color={color.gold} h4SizeXL="1.5rem">
            <h4>優秀な理工系学生・グローバル人材がイノベーション戦略の成功に貢献いたします。</h4>
          </PlainText>
        </Stacked>

        <Stacked paddingPos="top" paddingSize="narrow" wrap>
          <Columns wrapXL="nowrap" gap="normal" align="center">
            <Block width="25%">
              <Figure src={view.url('images/description_01.jpg')} name="外国人材" width="100%" />
            </Block>

            <Block width="auto" shrink={2}>
              <PlainText>
                <p>ベトナムの送出し機関と提携し、企業さまのご要望にマッチする外国人材を現地で募集し、候補者としてご紹介いたします。親日であり、日本人に友好的な文化や行政の取り組みもあるベトナム。几帳面で仕事に取り組む姿勢も高く評価されています。ベトナム国内でも定評がある上位クラスの大学から、主に機械・電気・電子・情報系のエンジニアをご紹介いたします。N4以上（必要に応じて4〜6ヶ月間の日本語教育実施）の日本語スキルを持つエンジニアですから、入国後、即戦力として専門分野での活躍に期待できます。</p>
              </PlainText>
            </Block>
          </Columns>
        </Stacked>
      </Stacked>

      <Stacked paddingPos="top" isSection wrap>
        <Stacked paddingPos="none">
          <Match target01="日本国内在住の外国人材を<br/>採用したい企業さま" target02="在留資格を持ち日本国内で<br/>求職活動中の外国人材" />
        </Stacked>

        <Stacked paddingPos="top" paddingSize="narrow">
          <PlainText h4Align="center" h4Weight="400" h4Color={color.gold} h4SizeXL="1.5rem">
            <h4>留学生（技・人・国）、就労制限のない定住者雇用が人材課題を解決いたします。</h4>
          </PlainText>
        </Stacked>

        <Stacked paddingPos="top" paddingSize="narrow" wrap>
          <Columns wrapXL="nowrap" gap="normal" align="center">
            <Block width="25%">
              <Figure src={view.url('images/description_02.jpg')} name="外国人材" width="100%" />
            </Block>

            <Block width="auto" shrink={2}>
              <PlainText>
                <p>「永住者」、「日本人の配偶者等」、「永住者の配偶者等」、「定住者」の4つの在留資格は、就労の制限がありません。日本人と同様にどんな仕事にも就くことが可能です。いわゆる単純労働的な仕事に就いても問題ありません。主に日本国内在住の「定住者」外国人材をはじめ、高いスキルを持ち日本国内で活躍している「技術・人文知識・国際業務」外国人材を中心として、さらには日本国内での就職を希望する留学生（就労可能な在留資格：技・人・国、特定技能など）を対象に、企業さまの募集要項に適した候補者をご紹介いたします。</p>
              </PlainText>
            </Block>
          </Columns>
        </Stacked>
      </Stacked>

      <Stacked paddingPos="top" isSection wrap>
        <Stacked paddingPos="none">
          <Match target01="現場作業に従事する外国人材を<br/>採用したい企業さま" target02="特定技能の在留資格で<br/>働きたい外国人材" />
        </Stacked>

        <Stacked paddingPos="top" paddingSize="narrow">
          <PlainText h4Align="center" h4Weight="400" h4Color={color.gold} h4SizeXL="1.5rem">
            <h4>人材を確保することが困難な現場作業の人材不足を解決いたします。</h4>
          </PlainText>
        </Stacked>

        <Stacked paddingPos="top" paddingSize="narrow" wrap>
          <Columns wrapXL="nowrap" gap="normal" align="center">
            <Block width="25%">
              <Figure src={view.url('images/description_03.jpg')} name="外国人材" width="100%" />
            </Block>

            <Block width="auto" shrink={2}>
              <PlainText>
                <p>ベトナムの送出し機関と提携し、母国に帰国している元技能実習生で（①技能評価試験の専門級もしくは3級の合格証を持っている。②日本語能力検定（JLPT）N4以上の合格証を持っている）人材をを現地で募集します。また、技能実習第2号修了もしくは予定者で同一職種で特定技能に移行を希望する方、職種ごとの業界団体が実施する「特定技能試験」に合格した方（留学生含む）を対象に、応募意思を確認した上で候補者としてご紹介いたします。受入企業さまの各種届出及び支援業務をサポートいたします。</p>
              </PlainText>
            </Block>
          </Columns>
        </Stacked>
      </Stacked>

      <Stacked paddingPos="both" isSection wrap>
        <Stacked paddingPos="none">
          <Match target01="技能実習生を<br/>採用したい企業さま" target02="技能実習の在留資格で<br/>働きたい外国人材" />
        </Stacked>

        <Stacked paddingPos="top" paddingSize="narrow">
          <PlainText h4Align="center" h4Weight="400" h4Color={color.gold} h4SizeXL="1.5rem">
            <h4>計画的、継続的な業務の配分で生産現場の課題を解決いたします。</h4>
          </PlainText>
        </Stacked>

        <Stacked paddingPos="top" paddingSize="narrow" wrap>
          <Columns wrapXL="nowrap" gap="normal" align="center">
            <Block width="25%">
              <Figure src={view.url('images/description_04.jpg')} name="外国人材" width="100%" />
            </Block>

            <Block width="auto" shrink={2}>
              <PlainText>
                <p>技能実習制度は、実習生に技術や知識を修得させ、帰国後、母国の経済発展を担う「人づくり」に寄与することを目的としています。提携するフィリピン、ベトナムの送出し機関で企業さまのご要望にマッチする外国人材を現地で募集し、国際共生事業協同組合（監理団体）を通して、候補者としてご紹介いたします。送出機関と連携して求人票の作成から、母国での日本語教育、職種に合わせた技術的な教育も実施いたします。また、企業の受入準備から実習生の生活サポートまで、円滑な技能実習を支援いたします。</p>
              </PlainText>
            </Block>
          </Columns>
        </Stacked>
      </Stacked>
    </Page>
  );
};

export default AboutDescriptionPage;
