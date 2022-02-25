import type { NextPage } from 'next';
import { Page, Stacked, Columns, Block, PlainText } from 'unflexible-ui-legacy';
import { Header, Footer } from 'components/layout';
import { EnPageTitle } from 'components/block';
import { Title04 } from 'components/element';
import { Auth, AuthStateProvider, EditUser } from 'domains/account';

import styled from 'styled-components';
import { color, font } from 'lib/config';
import { view } from 'unflexible-ui-legacy';
import { useSeekerAuthState } from 'domains/matching';

const ServiceMatchingSeekerResumePage: NextPage = () => {
  return (
    <AuthStateProvider>
      <ServiceMatchingSeekerResumeContents />
    </AuthStateProvider>
  );
}

const ServiceMatchingSeekerResumeContents: NextPage = () => {
  const seekerAuthState = useSeekerAuthState();

  const routes = [
    { name: 'TOP', href: view.url('') },
    { name: 'Service', href: view.url('service') },
    { name: '外国人材マッチングサイト', href: view.url('service/matching') },
    { name: '履歴書ダウンロード', href: view.url('service/matching/seeker/resume') },
  ];

  return (
    <Page
      title="履歴書ダウンロード | 縁 -en- | 群馬県内に就職を希望する外国人材就職応援サイト"
      description=""
      path={`/service/matching/seeker/resume`}
      ogType="article"
      header={(
        <Header
          title="履歴書ダウンロード | 縁 -en- | 群馬県内に就職を希望する外国人材就職応援サイト"
          language="ja"
        />
      )}
      footer={<Footer/>}
      fixHeader
    >
      <Stacked paddingPos="none" color={color.lightGray}>
        <EnPageTitle routes={routes} />
      </Stacked>

      <Stacked isSection wrap>
        <Stacked paddingPos="none">
          <Title04 name="履歴書ダウンロード" tag="h2" color={color.semiSkyBlue} />
        </Stacked>
      </Stacked>
    </Page>
  );
}

export default ServiceMatchingSeekerResumePage;
