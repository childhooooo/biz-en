import type { NextPage } from 'next';
import { ReactNode } from 'react';
import { Page, Stacked, Columns, Block, PlainText } from 'unflexible-ui-legacy';
import { Header, Footer } from 'components/layout';
import { EnPageTitle } from 'components/block';
import { IconButton03, Title04 } from 'components/element';
import { Box01 } from 'components/container';
import { Auth, AuthStateProvider } from 'domains/account';

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { color, font } from 'lib/config';
import { view } from 'unflexible-ui-legacy';
import { Job, getDummyJob } from 'domains/matching';
import { useAuthState } from 'domains/account';

const ServiceMatchingEntryNewPage: NextPage = () => {
  return (
    <AuthStateProvider>
      <ServiceMatchingEntryNewContents />
    </AuthStateProvider>
  );
}

const ServiceMatchingEntryNewContents: NextPage = () => {
  const router = useRouter();
  const id = Array.isArray(router.query?.id) ? router.query.id[0] : router.query.id;

  const authState = useAuthState();

  const routes = [
    { name: 'TOP', href: view.url('') },
    { name: 'Service', href: view.url('service') },
    { name: '外国人材マッチングサイト', href: view.url('service/matching') },
    { name: '募集要項', href: view.url(`service/matching/${id || ''}`) },
    { name: 'マッチングエントリー', href: view.url(`service/matching/${id || ''}/entry/new`) }
  ];

  const [job, setJob] = useState<Job | null | undefined>(undefined);

  useEffect(() => {
    if(id) {
      try {
        const job = getDummyJob(id);
        setJob(job);
      } catch(e) {
        setJob(null);
      }
    }
  }, [id]);

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
        <Stacked paddingPos="none" wrap>
          <Title04 name="求人へのマッチングエントリー" tag="h2" color={color.semiSkyBlue} />
        </Stacked>

        <Stacked paddingPos="top" paddingSize="thin" wrap>
          <PlainText>
            <p>求人へのマッチングエントリーには会員（求職者）登録が必要です。会員登録またはログインをしてご利用ください。</p>
          </PlainText>
        </Stacked>

        <Stacked paddingPos="top" paddingSize="narrow" wrap>
          <Box01 padding="1.5rem" color={color.semiSkyBlue}>
            <Columns wrapXL="nowrap" align="center">
              <Block grow={1} shrink={1}>
                <PlainText baseMargin=".25rem 0" h3Margin=".25rem 0" h3SizeXL="1rem">
                  <h3>【募集職種】</h3>
                  <p>{job && job.position}</p>
                </PlainText>
              </Block>


              {authState.user.value !== null &&
                <Block width="300px">
                  <IconButton03 name="マッチングエントリー" icon={view.url('images/icon_login.png')} color="#00b4ff" />
                </Block>
              }
            </Columns>
          </Box01>
        </Stacked>

        <Stacked paddingPos="top" paddingSize="thin" wrap>
          {authState.user.value === null &&
            <Auth withNewLink />
          }
        </Stacked>
      </Stacked>
    </Page>

  );
}

export default ServiceMatchingEntryNewPage;
