import type { NextPage } from 'next';
import { Page, Stacked, Columns, Block, PlainText } from 'unflexible-ui-legacy';
import { Header, Footer } from 'components/layout';
import { EnPageTitle, Table01 } from 'components/block';
import { Button04 } from 'components/element';

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Job, getDummyJob } from 'domains/matching';
import { color, font } from 'lib/config';
import { view } from 'unflexible-ui-legacy';

interface Props {
}

const ServiceMatchingSinglePage: NextPage<Props> = ({}) => {
  const router = useRouter();
  const id = Array.isArray(router.query?.id) ? router.query.id[0] : router.query.id;

  const routes = [
    { name: 'TOP', href: view.url('') },
    { name: 'Service', href: view.url('service') },
    { name: '外国人材マッチングサイト', href: view.url('service/matching') },
    { name: '募集要項', href: view.url(`service/matching/${id || ''}`) }
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
  }, []);

  return (
    <Page
      title="募集要項 | 縁 -en- | 群馬県内に就職を希望する外国人材就職応援サイト"
      description=""
      path={`/service/matching/${job?.id || ''}`}
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

      {!job &&
        <Stacked isSection>
          <p>読み込み中...</p>
        </Stacked>
      }

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

          <Stacked paddingPos="top" paddingSize="thin" wrap>
            <Columns justify="center">
              <Button04 name="この求人にマッチングエントリーする" color={color.orange} kind="link" href={view.url(`service/matching/${job.id}/entry/new`)} />
            </Columns>
          </Stacked>

          <Stacked paddingPos="top" paddingSize="narrow" wrap>
            <Table01>
              <tr>
                <th>募集職種</th>
                <td dangerouslySetInnerHTML={{ __html: job.position }} />
              </tr>

              <tr>
                <th>仕事内容</th>
                <td dangerouslySetInnerHTML={{ __html: job.description }} />
              </tr>

              <tr>
                <th>応募資格</th>
                <td dangerouslySetInnerHTML={{ __html: job.qualifications }} />
              </tr>

              <tr>
                <th>雇用形態</th>
                <td dangerouslySetInnerHTML={{ __html: job.employmentStatus }} />
              </tr>

              <tr>
                <th>勤務地</th>
                <td dangerouslySetInnerHTML={{ __html: job.workAt }} />
              </tr>

              <tr>
                <th>在留資格</th>
                <td dangerouslySetInnerHTML={{ __html: job.stateOfResidence || '' }} />
              </tr>

              <tr>
                <th>給与</th>
                <td dangerouslySetInnerHTML={{ __html: job.salary }} />
              </tr>

              <tr>
                <th>勤務時間</th>
                <td dangerouslySetInnerHTML={{ __html: job.officeHours }} />
              </tr>

              <tr>
                <th>休日・休暇</th>
                <td dangerouslySetInnerHTML={{ __html: job.holiday }} />
              </tr>

              <tr>
                <th>福利厚生</th>
                <td dangerouslySetInnerHTML={{ __html: job.welfare || '' }} />
              </tr>

              <tr>
                <th>採用の流れ</th>
                <td dangerouslySetInnerHTML={{ __html: job.flow || '' }} />
              </tr>
            </Table01>
          </Stacked>

          <Stacked paddingPos="top" paddingSize="narrow" wrap>
            <Columns justify="center">
              <Button04 name="この求人にマッチングエントリーする" color={color.orange} kind="link" href={view.url(`service/matching/${job.id}/entry/new`)} />
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
