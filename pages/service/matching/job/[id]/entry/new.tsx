import type { NextPage } from 'next';
import { Page, Stacked, Columns, Block, PlainText } from 'unflexible-ui-legacy';
import { EnHeader, Footer } from 'components/layout';
import { EnPageTitle } from 'components/block';
import { IconButton03, Title04 } from 'components/element';
import { Box01 } from 'components/container';
import { SeekerAuth } from 'domains/matching';

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { withSessionSsr } from 'lib/session';
import { color, font } from 'lib/config';
import { view } from 'unflexible-ui-legacy';
import { Job, getJob, Seeker } from 'domains/matching';
import { useAppState } from 'domains/app';

export const getServerSideProps = withSessionSsr(async function({ req, query }) {
  const id = Array.isArray(query.id) ? query.id[0] : query.id;

  let jobRaw = null;
  try {
    if (id) {
      jobRaw = await getJob(parseInt(id));
    }
  } catch (e: any) {
    console.error(e);
  }

  return {
    props: {
      jobRaw: JSON.stringify(jobRaw),
      seeker: req.session.seeker || null
    }
  };
});

interface Props {
  jobRaw: string;
  seeker: Seeker;
}

const ServiceMatchingEntryNewPage: NextPage<Props> = ({ seeker, jobRaw }) => {
  const appState = useAppState();
  const router = useRouter();
  const id = Array.isArray(router.query?.id) ? router.query.id[0] : router.query.id;

  let job: Job | null = null;
  try {
    job = Job.fromObject(JSON.parse(jobRaw));
  } catch (e) {
    console.log(e);
  }

  useEffect(() => {
    if (seeker) {
      appState.seeker.setState(seeker);
    } else {
      appState.seeker.setState(null);
    }
  }, [])

  const entry = async () => {
    if(job && seeker) {
      try {
        const res = await fetch(`/api/matching/entry`, {
          method: 'POST',
          body: JSON.stringify({
            jobId: job.id,
            seekerId: seeker.id,
            title: `${seeker.name}さんの${job.name}へのエントリー`
          }),
          headers: {
            'Content-Type': 'application/json'
          }
        });

        if(!res.ok) {
          throw new Error('');
        }

        const data = await res.json();
        console.log(data);

        if(!data.entry) {
          throw new Error('');
        }

        router.push(view.url('/service/matching/job/[id]/entry/complete'));
      } catch(e) {
        console.error(e);
        alert('何かうまくいきませんでした。もう一度お試しください。');
      }
    }
  };

  const routes = [
    { name: 'TOP', href: view.url('') },
    { name: 'Service', href: view.url('service') },
    { name: '外国人材マッチングサイト', href: view.url('service/matching') },
    { name: '募集要項', href: view.url(`service/matching/job/${id || ''}`) },
    { name: 'マッチングエントリー', href: view.url(`service/matching/job/${id || ''}/entry/new`) }
  ];

  return (
    <Page
      title="募集要項 | 縁 -en- | 群馬県内に就職を希望する外国人材就職応援サイト"
      description=""
      path={`/service/matching/${id || ''}/entry/new`}
      ogType="article"
      header={(
        <EnHeader
          title="募集要項 | 縁 -en- | 群馬県内に就職を希望する外国人材就職応援サイト"
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

      <Stacked isSection>
        <Stacked paddingPos="none" wrap>
          <Title04 name="求人へのマッチングエントリー" tag="h2" color={color.semiSkyBlue} />
        </Stacked>

        {appState.seeker.state === null &&
          <Stacked paddingPos="top" paddingSize="thin" wrap>
            <PlainText>
              <p>求人へのマッチングエントリーには会員（求職者）登録が必要です。会員登録またはログインをしてご利用ください。</p>
            </PlainText>
          </Stacked>
        }

        <Stacked paddingPos="top" paddingSize="narrow" wrap>
          <Box01 padding="1.5rem" color={color.semiSkyBlue}>
            <Columns wrapXL="nowrap" wrapM="wrap" gap="normal" align="center">
              <Block grow={1} shrink={1}>
                <PlainText baseMargin=".25rem 0" h3Margin=".25rem 0" h3SizeXL="1rem">
                  <h3>【募集職種】</h3>
                  <p>{job && job.position}</p>
                </PlainText>
              </Block>

              {appState.seeker.state !== null &&
                <Block width="300px" widthM="100%">
                  <IconButton03
                    name="マッチングエントリー"
                    icon={view.url('images/icon_login.png')}
                    color={color.lightBlue}
                    kind="button"
                    onClick={entry}
                  />
                </Block>
              }
            </Columns>
          </Box01>
        </Stacked>

        <Stacked paddingPos="top" paddingSize="thin" wrap>
          {appState.seeker.state === null &&
            <SeekerAuth withNewLink />
          }
        </Stacked>
      </Stacked>
    </Page>
  );
}

export default ServiceMatchingEntryNewPage;
