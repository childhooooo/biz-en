import styled from 'styled-components';
import { Job } from '../entities/job';

import { view } from 'unflexible-ui';

interface Props {
  job: Job;
}

const JobLink = ({job}: Props) => {
  return (
    <Component href={view(`service/matching/${job.id}`)}>
      {job.name}
    </Component>
  );
};

const Component = styled.a`
`

export default JobLink;
