import styled from 'styled-components';
import { Job } from '../entities/job';

import { view } from 'unflexible-ui-legacy';

interface Props {
  job: Job;
}

const JobLink = ({job}: Props) => {
  return (
    <Component href={view.url(`service/matching/${job.id}`)}>
      <Name>{job.name}</Name>
      <Categories>
        {job.categories.map((c: JobCateogry, index: number) => {
          return (
            <Category color={c.color}>{c.name}</Category>
          );
        })}
      </Categories>

      <Details>
        <dt>仕事内容</dt>
        <dd dangerouslySetInnerHTML={{ __html: job.description }} />
      </Details>
    </Component>
  );
};

const Component = styled.a`
  display: block;
  width: 100%;
  height: 100%;
`

const Name = styled.h3`
`;

const Categories = styled.ul`
`;

const Category = styled.li`
`;

const Details = styled.dl`
`;

export default JobLink;
