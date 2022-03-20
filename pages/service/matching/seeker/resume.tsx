import type { NextPage } from 'next';
import { Page, Stacked, Columns, Block, PlainText } from 'unflexible-ui-legacy';
import { Header, Footer } from 'components/layout';
import { EnPageTitle } from 'components/block';
import { Title04 } from 'components/element';
import { Auth, AuthStateProvider, EditUser } from 'domains/account';

import styled from 'styled-components';
import { color, font } from 'lib/config';
import { withSessionSsr } from 'lib/session';
import { view } from 'unflexible-ui-legacy';
import { useSeekerAuthState, signedIn } from 'domains/matching';

export const getServerSideProps = withSessionSsr(
  async function getServerSideProps({ req }) {
    const seekerId = req.session.seeker?.id || null;
    return {
      props: {
        seekerId
      }
    };
  }
);

const ServiceMatchingSeekerResumePage: NextPage<Props> = ({ seekerId }) => {
  return (
    <AuthStateProvider>
      <ServiceMatchingSeekerResumeContents seekerId={seekerId} />
    </AuthStateProvider>
  );
}

interface Props {
  seekerId: string | null;
}

const ServiceMatchingSeekerResumeContents: NextPage<Props> = ({ seekerId }) => {
  const seekerAuthState = useSeekerAuthState();
  if(seekerId) {
    signedIn(seekerAuthState, seekerId);
  }

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
