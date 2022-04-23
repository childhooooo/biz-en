import type { NextPage } from 'next';
import { Page, Stacked, Columns, Block, PlainText } from 'unflexible-ui-legacy';
import { EnHeader, Footer } from 'components/layout';
import { Box01 } from 'components/container';
import { EnPageTitle } from 'components/block';
import { Button03 } from 'components/element';
import { JobLink, Pagination, SeekerAuth } from 'domains/matching';

import { useEffect } from 'react';
import { Job, JobCategory, JobListStateProvider, Order, useJobListState, getJobs, getJobCategories } from 'domains/matching';
import { color } from 'lib/config';
import { view } from 'unflexible-ui-legacy';
import { withSessionSsr } from 'lib/session';
import { useAppState } from 'domains/app';

export const getServerSideProps = withSessionSsr(async function({ req }: any) {
  try {
    const jobs = await getJobs({
      page: 1,
      perPage: 6,
      orderBy: 'date',
      order: 'desc'
    });
    const jobCategories = await getJobCategories();

    return {
      props: {
        jobList: JSON.stringify(jobs?.jobs || []),
        size: jobs?.total || 0,
        jobCategories: JSON.stringify(jobCategories || [])
      }
    };
  } catch (e) {
    return {
      props: {
        jobList: JSON.stringify([]),
        size: 0,
        jobCategories: JSON.stringify([])
      }
    }
  }
});

interface Props {
  jobList: string | undefined;
  size: number;
  jobCategories: string | undefined;
}

const ServiceMatchingArchivePage: NextPage<Props> = ({ jobList, size, jobCategories }) => {
  const appState = useAppState();

  let list: Job[] = [];
  let categories: JobCategory[] = [];
  try {
    list = JSON.parse(jobList || '[]').map((j: any) => Job.fromObject(j));
    categories = JSON.parse(jobCategories || '[]').map((j: any) => JobCategory.fromObject(j));
  } catch (e: any) {
    console.error(e);
  }

  return (
    <JobListStateProvider initialJobList={{ list, size }}>
      <ServiceMatchingContents jobCategories={categories} />
    </JobListStateProvider>
  );
}

interface ContentsProps {
  jobCategories: JobCategory[];
}

const ServiceMatchingContents: NextPage<ContentsProps> = ({ jobCategories }) => {
  const routes = [
    { name: 'TOP', href: view.url('') },
    { name: 'Service', href: view.url('service') },
    { name: '外国人材マッチングサイト', href: view.url('service/matching') }
  ];

  const jobListState = useJobListState();

  useEffect(() => {
    jobListState.perPage.setValue(6);
    jobListState.orderBy.setValue('date');
    jobListState.order.setValue(Order.fromNumber(1));
  }, []);

  return (
    <Page
      title="縁 -en- | 群馬県内に就職を希望する外国人材就職応援サイト"
      description=""
      path="/service/matching"
      ogType="article"
      header={(
        <EnHeader
          title="縁 -en- | 群馬県内に就職を希望する外国人材就職応援サイト"
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

      <section>
        <Stacked paddingSize="thin" color={color.blue} wrap>
          <PlainText h3Color={color.white} h3Weight="400" h3SizeXL="1.25rem" h3SizeL="1.25rem" h3SizeM="1.25rem" h3SizeS="1.25rem" h3SizeXS="1.25rem">
            <h3>求人情報検索</h3>
          </PlainText>
        </Stacked>

        <Stacked paddingPos="top" wrap>
          <Columns repeat={3} repeatL={2} repeatS={1} gap="wide">
            {jobListState.list.value.map((job: Job, index: number) => {
              if (index < jobListState.perPage.value) {
                return (
                  <Block key={index} height="100%">
                    <JobLink job={job} categories={jobCategories} />
                  </Block>
                );
              }
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
                href={view.url(`service/matching/seeker/resume`)}
              />
            </Stacked>

            <Stacked paddingPos="top" paddingSize="narrow">
              <Button03
                name="会員（求職者）情報の変更・退会"
                description="会員登録情報の変更または退会を希望される方はこちらより申請をしてください。"
                kind="link"
                href={view.url(`service/matching/seeker/edit-request/new`)}
              />
            </Stacked>
          </Box01>
        </Stacked>
      </section>
    </Page>
  );
};

export default ServiceMatchingArchivePage;
