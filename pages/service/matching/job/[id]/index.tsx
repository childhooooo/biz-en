import type { NextPage } from 'next';
import { Page, Stacked, Columns, Block, PlainText } from 'unflexible-ui-legacy';
import { EnHeader, Footer } from 'components/layout';
import { EnPageTitle, Table01 } from 'components/block';
import { Button04 } from 'components/element';

import { useRouter } from 'next/router';
import styled from 'styled-components';
import { view } from 'unflexible-ui-legacy';
import { color, font } from 'lib/config';
import { nl2br } from 'lib/util';
import { Job, getJob } from 'domains/matching';

export async function getServerSideProps({ params }: any) {
  try {
    const job = await getJob(params.id);
    return {
      props: {
        jobData: JSON.stringify(job)
      }
    };
  } catch (e) {
    return {
      props: {
        jobData: ''
      }
    };
  }
};

interface Props {
  jobData: string;
}

const ServiceMatchingSinglePage: NextPage<Props> = ({ jobData }) => {
  const router = useRouter();
  const id = Array.isArray(router.query?.id) ? router.query.id[0] : router.query.id;

  const routes = [
    { name: 'TOP', href: view.url('') },
    { name: 'Service', href: view.url('service') },
    { name: '外国人材マッチングサイト', href: view.url('service/matching') },
    { name: '募集要項', href: view.url(`service/matching/job/${id || ''}`) }
  ];

  let job: Job | null;
  try {
    job = Job.fromObject(JSON.parse(jobData));
  } catch (e) {
    job = null;
  }

  return (
    <Page
      title="募集要項 | 縁 -en- | 群馬県内に就職を希望する外国人材就職応援サイト"
      description=""
      path={`/service/matching/${job?.id || ''}`}
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

      {job &&
        <Stacked isSection>
          <Stacked paddingPos="none" wrap>
            <Title>
              <h2>
                <img src={view.url('images/icon_document_blue.png')} alt="アイコン" />
                <span>募集要項</span>
              </h2>

              <p>File: {job.id}</p>
            </Title>
          </Stacked>

          <Stacked paddingPos="top" paddingSize="narrow" wrap>
            <Columns justify="center">
              <Button04 name="この求人にマッチングエントリーする" color={color.orange} kind="link" href={view.url(`service/matching/job/${job.id}/entry/new`)} />
            </Columns>
          </Stacked>

          <Stacked paddingPos="top" paddingSize="narrow" wrap>
            <Table01>
              <tr>
                <th>募集職種</th>
                <td dangerouslySetInnerHTML={{ __html: nl2br(job.position) }} />
              </tr>

              <tr>
                <th>仕事内容</th>
                <td dangerouslySetInnerHTML={{ __html: nl2br(job.description) }} />
              </tr>

              <tr>
                <th>応募資格</th>
                <td dangerouslySetInnerHTML={{ __html: nl2br(job.requirements) }} />
              </tr>

              <tr>
                <th>雇用形態</th>
                <td dangerouslySetInnerHTML={{ __html: nl2br(job.employmentStatus) }} />
              </tr>

              <tr>
                <th>勤務地</th>
                <td dangerouslySetInnerHTML={{ __html: nl2br(job.workAt) }} />
              </tr>

              <tr>
                <th>在留資格</th>
                <td dangerouslySetInnerHTML={{ __html: nl2br(job.qualifications) || '' }} />
              </tr>

              <tr>
                <th>給与</th>
                <td dangerouslySetInnerHTML={{ __html: nl2br(job.salary) }} />
              </tr>

              <tr>
                <th>勤務時間</th>
                <td dangerouslySetInnerHTML={{ __html: nl2br(job.officeHours) }} />
              </tr>

              <tr>
                <th>休日・休暇</th>
                <td dangerouslySetInnerHTML={{ __html: nl2br(job.holiday) }} />
              </tr>

              <tr>
                <th>福利厚生</th>
                <td dangerouslySetInnerHTML={{ __html: nl2br(job.welfare || '') }} />
              </tr>

              <tr>
                <th>採用の流れ</th>
                <td dangerouslySetInnerHTML={{ __html: nl2br(job.flow || '') }} />
              </tr>
            </Table01>
          </Stacked>

          <Stacked paddingPos="top" paddingSize="narrow" wrap>
            <Columns justify="center">
              <Button04 name="この求人にマッチングエントリーする" color={color.orange} kind="link" href={view.url(`service/matching/job/${job.id}/entry/new`)} />
            </Columns>
          </Stacked>
        </Stacked>
      }
    </Page>

  );
}

const Title = styled.div`
display: flex;
align-items: center;

h2 {
  display: flex;
  align-items: center;
  width: 160px;
  font-size: 1.25rem;
  font-family: ${font.sansSerif};

  font-weight: 400;
  line-height: 1;
  color: ${color.blue};

  img {
      width: auto;
      height: 2rem;
  }

    span {
    margin-left: .5rem;
  }
}

  p {
  font-size: 1rem;
  color: ${color.darkGray};
}
`;

export default ServiceMatchingSinglePage;
