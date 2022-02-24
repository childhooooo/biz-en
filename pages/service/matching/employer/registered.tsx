import type { NextPage } from 'next';
import { Page, Stacked, PlainText, Columns, Block } from 'unflexible-ui-legacy';
import { Header, Footer } from 'components/layout';
import { PageTitle } from 'components/block';
import { Title04, Border, IconButton02 } from 'components/element';

import { color } from 'lib/config';
import { view } from 'unflexible-ui-legacy';

interface Props {}

const ServiceEmployerRegisteredPage: NextPage = ({}: Props) => {
  const routes = [
    { name: 'TOP', href: view.url('') },
    { name: 'Service', href: view.url('service') },
    { name: '求人企業登録', href: view.url('service/employer/new') }
  ];

  return (
    <Page
      title="求人企業登録完了 | 縁 -en-"
      description=""
      path="/service/employer/registered"
      ogType="article"
      header={(
        <Header
          title="求人企業登録完了 | 外国人材群馬支援事業（株式会社ビズソリューションズ）"
          language="ja"
        />
      )}
      footer={<Footer/>}
      fixHeader
    >
      <Stacked paddingPos="none" color={color.lightGray} isSection>
        <PageTitle
          name="求人企業登録"
          routes={routes}
        />
      </Stacked>

      <Stacked paddingPos="top" paddingSize="narrow" wrap>
        <Title04 name="求人企業（基本情報）登録が完了しました" tag="h2" />
      </Stacked>

      <Stacked paddingPos="top" paddingSize="narrow" wrap>
        <PlainText>
          <p>
            当社の専任担当者から連絡させていただきます。WEB面談または訪問日時のすり合わせをさせていただきます。職務内容や応募条件、待遇などをヒヤリングさせていただいた後、求人票を提案・作成し求人情報を公開します。合わせて「人材紹介契約（完全成功報酬型）」締結させていただきます。<br/>
            ※連絡までに数日かかる場合がありますので、予めご了承ください。
          </p>
        </PlainText>
      </Stacked>

      <Stacked paddingPos="top" paddingSize="narrow" wrap>
        <Border color={color.gray} height="2px" />
      </Stacked>

      <Stacked paddingSize="narrow" wrap>
        <Columns justify="center">
          <Block>
            <IconButton02 name="閉じる" icon={view.url('images/icon_cross_white.png')} color={color.darkGray} kind="link" href={view.url('employer/signin')} />
          </Block>
        </Columns>
      </Stacked>
    </Page>
  );
};

export default ServiceEmployerRegisteredPage;
