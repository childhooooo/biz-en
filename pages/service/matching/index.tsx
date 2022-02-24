import type { NextPage } from 'next';
import { Page, Stacked, Columns, Block, PlainText } from 'unflexible-ui-legacy';
import { Header, Footer } from 'components/layout';
import { Box01 } from 'components/container';
import { EnPageTitle } from 'components/block';
import { Button03 } from 'components/element';
import { JobLink, Pagination } from 'domains/matching';

import { useEffect } from 'react';
import { Job, JobListStateProvider, useJobListState, getDummyJobList, getJobListSize } from 'domains/matching';
import { color } from 'lib/config';
import { view } from 'unflexible-ui-legacy';

export function getStaticProps() {
  const jobList = getDummyJobList();
  const size = getJobListSize();

  return {
    props: {
      jobList: JSON.stringify(jobList),
      size
    }
  };
}

interface Props {
  jobList: string | undefined;
  size: number;
}

const ServiceMatchingArchivePage: NextPage<Props> = ({ jobList, size }) => {
  let list: Job[] = [];
  try {
    list = JSON.parse(jobList || '[]').map((j: any) => Job.fromJsonObject(j));
  } catch(e: any) {
    console.error(e);
  }

  return (
    <JobListStateProvider initialJobList={{ list, size }}>
      <ServiceMatchingContents />
    </JobListStateProvider>
  );
}

const ServiceMatchingContents: NextPage = () => {
  const routes = [
    { name: 'TOP', href: view.url('') },
    { name: 'Service', href: view.url('service') },
    { name: '外国人材マッチングサイト', href: view.url('service/matching') }
  ];

  const jobListState = useJobListState();

  useEffect(() => {
    jobListState.perPage.setValue(2);
  }, []);

  return (
    <Page
      title="縁 -en- | 群馬県内に就職を希望する外国人材就職応援サイト"
      description=""
      path="/service/matching"
      ogType="article"
      header={(
        <Header
          title="縁 -en- | 群馬県内に就職を希望する外国人材就職応援サイト"
          language="ja"
        />
      )}
      footer={<Footer/>}
      fixHeader
    >
      <Stacked paddingPos="none" color={color.lightGray}>
        <EnPageTitle routes={routes} />
      </Stacked>

      <section>
        <Stacked paddingSize="thin" color={color.blue} wrap>
          <PlainText h3Color={color.white} h3Weight="400" h3SizeXL="1.25rem" h3SizeL="1.25rem" h3SizeM="1.25rem" h3SizeS="1.25rem" h3SizeXS="1.25rem">
            <h3>求人情報検索</h3>
          </PlainText>
        </Stacked>

        <Stacked paddingPos="top" wrap>
          <Columns repeat={3} gap="wide">
            {jobListState.list.value.map((job: Job, index: number) => {
              return (
                <Block key={index} height="100%">
                  <JobLink job={job} />
                </Block>
              );
            })}
          </Columns>
        </Stacked>

        <Stacked paddingPos="top" paddingSize="narrow" wrap>
          <Columns justify="center">
            <Pagination />
          </Columns>
        </Stacked>

        <Stacked wrap>
          <Box01 padding="1rem 1.5rem" color={color.darkGray}>
            <Stacked paddingPos="none">
              <Button03
                name="履歴書のダウンロード"
                description="登録いただいた会員情報とWEB面談でヒヤリングした内容を合わせて作成した応募資料を、履歴書としてPDFフォーマットでダウンロードできます。"
                kind="link"
                href={view.url(`service/seeker/0/resume`)}
              />
            </Stacked>

            <Stacked paddingPos="top" paddingSize="narrow">
              <Button03
                name="会員（求職者）情報の変更・退会"
                description="会員登録情報の変更または退会を希望される方はこちらより申請をしてください。"
                kind="link"
                href={view.url(`service/seeker/0`)}
              />
            </Stacked>
          </Box01>
        </Stacked>
      </section>
    </Page>
  );
};

export default ServiceMatchingArchivePage;
