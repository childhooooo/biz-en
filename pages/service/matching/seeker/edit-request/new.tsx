import type { NextPage } from 'next';
import { Page, Stacked, PlainText } from 'unflexible-ui-legacy';
import { EnHeader, Footer } from 'components/layout';
import { EnPageTitle } from 'components/block';
import { Title04 } from 'components/element';
import { SeekerAuth, NewEditRequest } from 'domains/matching';

import { useEffect } from 'react';
import styled from 'styled-components';
import { view } from 'unflexible-ui-legacy';
import { color, font } from 'lib/config';
import { withSessionSsr } from 'lib/session';
import { Seeker } from 'domains/matching';
import { useAppState } from 'domains/app';

export const getServerSideProps = withSessionSsr(function({ req }) {
  return {
    props: {
      seeker: req.session.seeker || null
    }
  };
});

interface Props {
  seeker: Seeker | null;
}

const ServiceMatchingSeekerEditRequestNewPage: NextPage<Props> = ({ seeker }) => {
  const appState = useAppState();

  useEffect(() => {
    if (seeker) {
      appState.seeker.setState(seeker);
    } else {
      appState.seeker.setState(null);
    }
  }, []);

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
        <EnHeader
          title="会員（求職者）情報の変更・退会 | 縁 -en- | 群馬県内に就職を希望する外国人材就職応援サイト"
          language="ja"
          routes={routes}
        />
      )}
      footer={<Footer />}
      fixHeader
    >
      <Stacked paddingPos="none" color={color.lightGray}>
        <EnPageTitle />
      </Stacked>

      <Stacked isSection wrap>
        <Stacked paddingPos="none">
          <Title04 name="会員（求職者）情報の変更・退会" tag="h2" color={color.semiSkyBlue} />
        </Stacked>

        {appState.seeker.state === null &&
          <>
            <Stacked paddingPos="top" paddingSize="thin">
              <PlainText>
                <p>こちらで登録情報の変更および退会の申請ができます。</p>
              </PlainText>
            </Stacked>

            <Stacked paddingPos="top" paddingSize="narrow">
              <SeekerAuth />
            </Stacked>
          </>
        }

        {appState.seeker.state !== null &&
          <>
            <Stacked paddingPos="top" paddingSize="thin">
              <PlainText>
                <p>
                  下記のフォームより、「申請内容」欄の「登録情報の変更」・「退会」いずれかを選択してください。<br />
                  「登録情報の変更」の場合、変更（追加・削除）したい項目・変更後の内容を「変更内容」欄に記入して、送信してください。<br />
                  ※「登録情報の変更」・「退会」の申請から、手続き完了まで数日かかる場合がありますので予めご了承ください。<br />
                  <Note>※ 応募企業で選考中または内定から入社までの期間中は「退会」できません。期間終了後に退会申請してください。</Note>
                </p>
              </PlainText>
            </Stacked>

            <Stacked paddingPos="top" paddingSize="narrow">
              <NewEditRequest seeker={appState.seeker.state} />
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

export default ServiceMatchingSeekerEditRequestNewPage;
