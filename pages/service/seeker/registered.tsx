import type { NextPage } from 'next';
import { Page, Stacked, PlainText, Columns, Block } from 'unflexible-ui-legacy';
import { Header, Footer } from 'components/layout';
import { PageTitle } from 'components/block';
import { Title04, Border, IconButton02 } from 'components/element';

import { color } from 'lib/config';
import { view } from 'unflexible-ui-legacy';

interface Props {}

const ServiceSeekerRegisteredPage: NextPage = ({}: Props) => {
  const routes = [
    { name: 'TOP', href: view.url('') },
    { name: 'Service', href: view.url('service') },
    { name: '求職者登録', href: view.url('service/seeker/new') }
  ];

  return (
    <Page
      title="求職者登録完了 | 縁 -en-"
      description=""
      path="/service/seeker/registered"
      ogType="article"
      header={(
        <Header
          title="会員登録完了 | 外国人材群馬支援事業（株式会社ビズソリューションズ）"
          language="ja"
        />
      )}
      footer={<Footer/>}
      fixHeader
    >
      <Stacked paddingPos="none" color={color.lightGray} isSection>
        <PageTitle
          name="会員登録"
          routes={routes}
        />
      </Stacked>

      <Stacked paddingPos="top" paddingSize="narrow" wrap>
        <Title04 name="会員（求職者）登録が完了しました" tag="h2" />
      </Stacked>

      <Stacked paddingPos="top" paddingSize="narrow" wrap>
        <PlainText>
          <p>
            当社の就職支援スタッフとのWEB面談可能な日時を予約していただくために、ご登録メールアドレスにメールを送信します。WEB面談では、プロフィールの補足として、職務経歴や資格、希望する仕事内容、就職時期などのヒヤリングを行い応募書類（エントリーシート）求職者情報を作成させていただきます。<br/>
            ※連絡までに、数日かかる場合がありますので予めご了承ください。
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

export default ServiceSeekerRegisteredPage;
