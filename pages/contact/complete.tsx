import type { NextPage } from 'next';
import { Page, Stacked, PlainText } from 'unflexible-ui-legacy';
import { Header, Footer } from 'components/layout';
import { PageTitle } from 'components/block';
import { Title04, CloseButton, Border } from 'components/element';

import { useRouter } from 'next/router';
import { view } from 'unflexible-ui-legacy';
import { color } from 'lib/config';

const ContactCompletePage: NextPage = () => {
  const routes = [
    { name: 'TOP', href: view.url('') },
    { name: 'お問い合わせ', href: view.url('complete') }
  ];

  return (
    <Page
      title={'お問い合わせありがとうございます | 株式会社ビズソリューションズ'}
      description=""
      path={`/contact/complete`}
      ogType="article"
      header={(
        <Header
          title={'お問い合わせありがとうございます | 株式会社ビズソリューションズ'}
          language="ja"
        />
      )}
      footer={<Footer/>}
      fixHeader
    >
      <Stacked paddingPos="none" color={color.lightGray}>
        <PageTitle routes={routes} />
      </Stacked>

      <Stacked isSection wrap>
        <Stacked paddingPos="none">
          <Title04 name='お問い合わせを承りました' tag="h2" color={color.semiSkyBlue} />
        </Stacked>

        <Stacked paddingPos="top" paddingSize="thin">
          <PlainText>
          <p>お問い合わせ誠にありがとうございます。<br/>正式な回答が届くまで数日かかる場合がありますので予めご了承ください。</p>
          </PlainText>
        </Stacked>

        <Stacked paddingPos="top" paddingSize="narrow">
          <Border color={color.gray} height="1px" />
        </Stacked>

        <Stacked paddingPos="top" paddingSize="narrow">
          <CloseButton redirect={view.url('')} />
        </Stacked>
      </Stacked>
    </Page>
  );
}

export default ContactCompletePage;
