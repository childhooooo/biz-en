import styled from 'styled-components';
import { Job } from '../entities/job';
import { JobCategory } from '../entities/jobCategory';

import { view } from 'unflexible-ui-legacy';
import { color, font } from 'lib/config';

interface Props {
  job: Job;
  categories: JobCategory[];
}

const JobLink = ({ job, categories }: Props) => {
  return (
    <Component>
      <Contents>
        <Header>
          <Name>{job.name}</Name>
        </Header>

        <Body>
          <Categories>
            {job.categories.map((key: number, index: number) => {
              const cat = categories.filter((c: JobCategory) => c.id === key)[0];
              return (
                cat && <Category key={index} color={cat.color || color.theme}>{cat.name || ''}</Category>
              );
            })}
          </Categories>

          <Details>
            <div>
              <dt>仕事内容</dt>
              <dd dangerouslySetInnerHTML={{ __html: job.description }} />
            </div>

            <div>
              <dt>勤 務 地</dt>
              <dd dangerouslySetInnerHTML={{ __html: job.workAt }} />
            </div>

            <div>
              <dt>給　　与</dt>
              <dd dangerouslySetInnerHTML={{ __html: job.salary }} />
            </div>

            <div>
              <dt>勤務時間</dt>
              <dd dangerouslySetInnerHTML={{ __html: job.officeHours }} />
            </div>

            <div>
              <dt>休　　日</dt>
              <dd dangerouslySetInnerHTML={{ __html: job.holiday }} />
            </div>
          </Details>
        </Body>
      </Contents>

      <Footer>
        <Link href={view.url(`service/matching/job/${job.id}`)}>
          詳細を見る
        </Link>
      </Footer>
    </Component>
  );
};

const Component = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  font-family: ${font.sansSerif};
  background-color: ${color.lightBeige};
`;

const Contents = styled.div`
`;

const Header = styled.div`
  padding: 1rem 1.5rem;
  background-color: ${color.beige};
  border-bottom: 1px solid ${color.orange};
`;

const Name = styled.h3`
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 1;
`;

const Body = styled.div`
  padding: 1.5rem;
`;

const Categories = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
`;

interface CategoryProps {
  color: string;
}

const Category = styled.li<CategoryProps>`
  padding: .25rem .75rem;
  color: ${color.white};
  background-color: ${props => props.color};

  &:not(:first-child) {
    margin-left: .5rem;
  }
`;

const Details = styled.dl`
  margin-top: 1rem;

  > div {
    display: flex;

    &:not(:first-child) {
      margin-top: 1rem;
    }
  }

  dt {
    flex-shrink: 0;
    width: 4rem;
  }

  dd {
    margin-left: 1rem;
  }
`;

const Footer = styled.div`
  padding: 1.5rem;
`;

const Link = styled.a`
  display: block;
  width: 200px;
  margin: 0 auto;
  padding: .75rem;
  text-decoration: none;
  text-align: center;
  line-height: 1;
  color: ${color.white};
  background-color: ${color.purple};
  border-radius: 15px;
  transition-duration: .3s;

  &:hover {
    background-color: ${color.lightPurple};
}
`;

export default JobLink;
