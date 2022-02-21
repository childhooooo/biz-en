import type { NextPage } from 'next';
import { Page, Stacked, Columns, Block, PlainText } from 'unflexible-ui-legacy';
import { Header, Footer } from 'components/layout';
import { JobLink } from 'domains/matching';
import { EnPageTitle } from 'components/block';

import { Job, JobListStateProvider, useJobListState, getDummyJobList, fetchJobList, getJobListSize } from 'domains/matching';
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

const ServiceMatchingPage: NextPage<Props> = ({ jobList, size }) => {
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

  return (
    <Page
      title="外国人材マッチングサイト | 縁 -en-"
      description=""
      path="/service/matching"
      ogType="article"
      header={(
        <Header
          title="外国人材マッチングサイト | 外国人材群馬支援事業（株式会社ビズソリューションズ）"
          language="ja"
        />
      )}
      footer={<Footer/>}
      fixHeader
    >
      <Stacked paddingPos="none" color={color.lightGray} isSection>
        <EnPageTitle routes={routes} />
      </Stacked>

      <Stacked paddingSize="thin" color={color.blue} wrap>
        <PlainText h3Color={color.white} h3Weight="400" h3SizeXL="1.25rem" h3SizeL="1.25rem" h3SizeM="1.25rem" h3SizeS="1.25rem" h3SizeXS="1.25rem">
          <h3>求人情報検索</h3>
        </PlainText>
      </Stacked>

      <Stacked paddingSize="" wrap>
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
    </Page>
  );
};

export default ServiceMatchingPage;
