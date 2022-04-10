import type { NextPage } from 'next';
import { Page, Stacked, PlainText } from 'unflexible-ui-legacy';
import { EnHeader, Footer } from 'components/layout';
import { EnPageTitle } from 'components/block';
import { Title04, IconButton01 } from 'components/element';

import { NewEmployer } from 'domains/matching';
import { color } from 'lib/config';
import { view } from 'unflexible-ui-legacy';

interface Props {}

const ServiceEmployerNewPage: NextPage = ({}: Props) => {
  const routes = [
    { name: 'TOP', href: view.url('') },
    { name: 'Service', href: view.url('service') },
    { name: '求人企業登録', href: view.url('service/matching/employer/new') }
  ];

  return (
    <Page
      title="求人企業登録 | 縁 -en- | 群馬県内に就職を希望する外国人材就職応援サイト"
      description=""
      path="/service/employer/new"
      ogType="article"
      header={
        <EnHeader
          title="求人企業登録 | 縁 -en- | 群馬県内に就職を希望する外国人材就職応援サイト"
          language="ja"
          routes={routes}
        />
      }
      footer={<Footer/>}
      fixHeader
    >
      <Stacked paddingPos="none" color={color.lightGray} isSection>
        <EnPageTitle />
      </Stacked>

      <Stacked paddingPos="top" paddingSize="narrow" wrap>
        <Title04 name="求人企業（基本情報）登録" tag="h2" color={color.semiSkyBlue} />
      </Stacked>

      <Stacked paddingPos="top" paddingSize="narrow" wrap>
        <PlainText>
          <p>
            無料で求人を掲載することができます。基本情報を入力してください。<br/>
            ご登録いただいた後、当社の専任担当者より、ご担当者さまとの面談（訪問または WEB）日時調整のご連絡をさせていただきます。職務内容や雇用条件などを詳しくお聞きした上で、採用成功のために最適と思われる求人票を提案、作成させていただきます。※ご連絡までに、数日かかる場合がありますので予めご了承ください。
          </p>
        </PlainText>
      </Stacked>

      <Stacked paddingPos="top" paddingSize="narrow" isSection wrap>
        <Stacked paddingPos="none">
          <IconButton01 name="求人企業登録でできること" kind="link" href={view.url('service/matching/employer')} icon={view.url('images/icon_handshake_green.png')} />
        </Stacked>

        <Stacked paddingPos="top" paddingSize="thin">
          <PlainText>
            <p>外国人材の採用をお考えの企業様向けに、求人情報の無料掲載、求職者とのマッチングサービスについてご案内しています。</p>
          </PlainText>
        </Stacked>
      </Stacked>

      <Stacked paddingPos="both" paddingSize="narrow" isSection wrap>
        <NewEmployer />
      </Stacked>

      <Stacked paddingPos="top" paddingSize="">
      </Stacked>
    </Page>
  );
};

export default ServiceEmployerNewPage;
