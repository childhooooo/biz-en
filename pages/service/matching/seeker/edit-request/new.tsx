import type { NextPage } from 'next';
import { Page, Stacked, Columns, Block, PlainText } from 'unflexible-ui-legacy';
import { Header, Footer } from 'components/layout';
import { EnPageTitle } from 'components/block';
import { Title04 } from 'components/element';
import { Auth, AuthStateProvider, EditUser } from 'domains/account';

import styled from 'styled-components';
import { color, font } from 'lib/config';
import { view } from 'unflexible-ui-legacy';
import { useAuthState } from 'domains/account';

const ServiceMatchingAccountEditRequestNewPage: NextPage = () => {
  return (
    <AuthStateProvider>
      <ServiceMatchingAccountEditRequestNewContents />
    </AuthStateProvider>
  );
}

const ServiceMatchingAccountEditRequestNewContents: NextPage = () => {
  const authState = useAuthState();

  const routes = [
    { name: 'TOP', href: view.url('') },
    { name: 'Service', href: view.url('service') },
    { name: '外国人材マッチングサイト', href: view.url('service/matching') },
    { name: '会員（求職者）情報の変更・退会', href: view.url('service/matching/seeker/edit-request/new') },
  ];

  return (
    <Page
      title="会員（求職者）情報の変更・退会 | 縁 -en- | 群馬県内に就職を希望する外国人材就職応援サイト"
      description=""
      path={`/service/matching/seeker/edit-request/new`}
      ogType="article"
      header={(
        <Header
          title="会員（求職者）情報の変更・退会| 縁 -en- | 群馬県内に就職を希望する外国人材就職応援サイト"
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
          <Title04 name="会員（求職者）情報の変更・退会" tag="h2" color={color.semiSkyBlue} />
        </Stacked>

        {authState.user.value === null &&
          <>
            <Stacked paddingPos="top" paddingSize="thin">
              <PlainText>
                <p>こちらで登録情報の変更および退会の申請ができます。</p>
              </PlainText>
            </Stacked>

            <Stacked paddingPos="top" paddingSize="narrow">
              <Auth />
            </Stacked>
          </>
        }

        {authState.user.value !== null &&
          <>
            <Stacked paddingPos="top" paddingSize="thin">
              <PlainText>
                <p>
                  下記のフォームより、「申請内容」欄の「登録情報の変更」・「退会」いずれかを選択してください。<br/>
                  「登録情報の変更」の場合、変更（追加・削除）したい項目・変更後の内容を「変更内容」欄に記入して、送信してください。<br/>
                  ※「登録情報の変更」・「退会」の申請から、手続き完了まで数日かかる場合がありますので予めご了承ください。<br/>
                  <Note>※ 応募企業で選考中または内定から入社までの期間中は「退会」できません。期間終了後に退会申請してください。</Note>
                </p>
              </PlainText>
            </Stacked>

            <Stacked paddingPos="top" paddingSize="narrow">
              <EditUser />
            </Stacked>
          </>
        }
      </Stacked>
    </Page>
  );
}

const Note = styled.strong`
  color: ${color.orange};
  font-weight: 700;
`;

export default ServiceMatchingAccountEditRequestNewPage;
