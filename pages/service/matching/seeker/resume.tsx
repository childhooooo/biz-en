import type { NextPage } from 'next';
import { Page, Stacked, Columns, Block, PlainText } from 'unflexible-ui-legacy';
import { EnHeader, Footer } from 'components/layout';
import { EnPageTitle } from 'components/block';
import { Title04, Pdf, IconButton03 } from 'components/element';
import { Box01 } from 'components/container';
import { SeekerAuth } from 'domains/matching';

import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { color, font } from 'lib/config';
import { withSessionSsr } from 'lib/session';
import { view } from 'unflexible-ui-legacy';
import { useAppState } from 'domains/app';
import { Seeker } from 'domains/matching';
import { Media, getMedia } from 'domains/media';

export const getServerSideProps = withSessionSsr(async function({ req }) {
  return {
    props: {
      seekerRaw: req.session.seeker ? JSON.stringify(req.session.seeker) : null
    }
  };
});

interface Props {
  seekerRaw: string | null;
}

const ServiceMatchingSeekerResumePage: NextPage<Props> = ({ seekerRaw }) => {
  const appState = useAppState();

  let seeker: Seeker | null = null;
  if (seekerRaw) {
    try {
      seeker = Seeker.deserialize(seekerRaw);
    } catch (e: any) {
      console.error(e);
    }
  }

  const [resume, setResume] = useState<Media | null>(null);

  useEffect(() => {
    if (seeker) {
      appState.seeker.setState(seeker);
    } else {
      appState.seeker.setState(null);
    }
  }, []);

  useEffect(() => {
    if(!appState.seeker.state) {
      setResume(null);
      return;
    }

    (async () => {
      if (!appState.seeker.state?.resumeId) {
        return;
      }

      try {
        const media = await getMedia(appState.seeker.state.resumeId);
        if (media.mimeType === 'application\/pdf') {
          setResume(media);
        }
      } catch (e) {
        console.log(e);
      }
    })();
  }, [appState.seeker.state]);

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
        <EnHeader
          title="履歴書ダウンロード | 縁 -en- | 群馬県内に就職を希望する外国人材就職応援サイト"
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
          <Title04 name="履歴書ダウンロード" tag="h2" color={color.semiSkyBlue} />
        </Stacked>

        {appState.seeker.state === null &&
          <>
            <Stacked paddingPos="top" paddingSize="thin">
              <PlainText>
                <p>
                  自ら直接、志望企業への就職活動においても、自由にダウンロードして利用ください。<br />
                  こちらの履歴書は、登録された会員情報に加え、あなたと当社専任スタッフとがWEB面談時に、プロフィールの補足として、ヒヤリングした内容が記入されてます。あなたがマッチングエントリーした求人、もしくはこちらからご案内した求人先に応募書類として利用いたします。<br />
                  経験や身につけたスキルが的確に伝えられる応募資料として作成しています。
                </p>
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
                  ※内容の修正・変更を希望される方は、
                  <Link href={view.url('service/matching/seeker/edit-request/new')}>登録情報の変更・退会フォーム</Link>
                  より変更内容をメール送信してください。
                </p>
              </PlainText>
            </Stacked>

            <Stacked paddingPos="top" paddingSize="narrow" isSection>
              <Box01 padding="1.5rem" color={color.semiSkyBlue}>
                <Stacked paddingPos="none">
                  <Title>プロフィール</Title>
                </Stacked>

                {resume &&
                  <Stacked paddingPos="top" paddingSize="narrow">
                    <Pdf url={resume.url} />
                  </Stacked>
                }

                {!resume &&
                  <Stacked paddingPos="top" paddingSize="narrow">
                    <PlainText>
                      <p>履歴書は準備中です。今しばらくお待ちください。</p>
                    </PlainText>
                  </Stacked>
                }
              </Box01>
            </Stacked>
          </>
        }
      </Stacked>
    </Page>
  );
}

const Link = styled.a`
color: ${color.semiSkyBlue};
`;

const Title = styled.h2`
font-family: ${font.sansSerif};
font-weight: 400;
font-size: 1.5rem;
`

export default ServiceMatchingSeekerResumePage;
