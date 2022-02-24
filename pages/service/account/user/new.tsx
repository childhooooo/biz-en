import type { NextPage } from 'next';
import { Page, Stacked, Columns, Block, PlainText } from 'unflexible-ui-legacy';
import { Header, Footer } from 'components/layout';
import { EnPageTitle } from 'components/block';
import { Auth, AuthStateProvider } from 'domains/account';

import { useRouter } from 'next/router';
import styled from 'styled-components';
import { color, font } from 'lib/config';
import { view } from 'unflexible-ui-legacy';
import { useAuthState } from 'domains/account';

const ServiceMatchingAccountUserNewPage: NextPage = () => {
  return (
    <AuthStateProvider>
      <ServiceMatchingAccountUserNewContents />
    </AuthStateProvider>
  );
}

const ServiceMatchingAccountUserNewContents: NextPage = () => {
  const router = useRouter();
  const id = Array.isArray(router.query?.id) ? router.query.id[0] : router.query.id;

  const authState = useAuthState();

  const routes = [
    { name: 'TOP', href: view.url('') },
    { name: 'Service', href: view.url('service') },
    { name: '外国人材マッチングサイト', href: view.url('service/matching') },
    { name: '会員（求職者）登録', href: view.url('service/matching/user/new') },
  ];

  return (
    <Page
      title="募集要項 | 縁 -en- | 群馬県内に就職を希望する外国人材就職応援サイト"
      description=""
      path={`/service/matching/${id || ''}/entry/new`}
      ogType="article"
      header={(
        <Header
          title="募集要項 | 縁 -en- | 群馬県内に就職を希望する外国人材就職応援サイト"
          language="ja"
        />
      )}
      footer={<Footer/>}
      fixHeader
    >
      <Stacked paddingPos="none" color={color.lightGray}>
        <EnPageTitle routes={routes} />
      </Stacked>

      <Stacked isSection>
      </Stacked>
    </Page>

  );
}

export default ServiceMatchingAccountUserNewPage;
