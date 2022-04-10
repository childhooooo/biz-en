import type { NextPage } from 'next';
import { Page, Stacked, Block, Figure, PlainText } from 'unflexible-ui-legacy';
import { Header, Footer } from 'components/layout';
import { PageTitle } from 'components/block';
import { color } from 'lib/config';

import { view } from 'unflexible-ui-legacy';

interface Props { }

const ServicePage: NextPage = ({ }: Props) => {
  const routes = [
    { name: 'TOP', href: view.url('') },
    { name: 'Service', href: view.url('service') },
    { name: '日本語レッスン', href: view.url('service/lesson') }
  ];

  return (
    <Page
      title="日本語レッスン | 外国人材群馬就職支援事業（株式会社ビズソリューションズ）"
      description=""
      path="/service/lesson"
      ogType="article"
      header={(
        <Header
          title="日本語レッスン | 外国人材群馬就職支援事業（株式会社ビズソリューションズ）"
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
            src={view.url('images/lesson_01@1500.jpg')}
            srcSet={`${view.url('images/lesson_01@2000.jpg')} 2000w, ${view.url('images/lesson_01@1500.jpg')} 1500w, ${view.url('images/lesson_01@1250.jpg')} 1250w, ${view.url('images/lesson_01@750.jpg')} 750w`}
          />
        </Block>
      </Stacked>

      <Stacked isSection wrap>
        <PlainText>
          <p>日本語能力の向上は、社員とのコミュニケーションがスムーズになり、モチベーションアップの効果が期待されます。技能実習生の多くは、JLTP N5・N4レベルで来日しますが、会話の少ない現場作業や生活の中ではなかなか日本語能力をアップさせる機会がありません。ビズソリューションズでは、技能実習および特定技能で働く外国人材を対象に、入社後、継続的に日本語学習ができる場を提供し応援しています。「日本語レッスン」では、母国での日本語学習教材として広く使われている教科書「みんなの日本語」を中心に、初級レベルの知識を復習し、中級前半の文型、語彙、会話表現を日本語の学習が楽しく進められるように内容の充実と工夫を図っています。日本語能力の向上はもちろん、品質や安全など働く上で必要な知識やモチベーションアップ、外国人材が地域社会で支障なく生活ができるよう、きめ細やかな教育を心がけています。<br />「外国人のための日本語教師」の資格を持つネイティブスピーカーの学習指導で、会話だけでなく、正しい日本語や日本の習慣・文化を学ぶことができます。特に技能実習生は、母国の家族のため覚悟をもって日本で働いていますので、外国人材を受け入れる企業は、採用・受け入れ時のサポートだけではなく、ずっと伴走しあえる環境を整えることが外国人材の定着率向上につながると考えています。</p>
        </PlainText>
      </Stacked>
    </Page>
  );
};

export default ServicePage;
