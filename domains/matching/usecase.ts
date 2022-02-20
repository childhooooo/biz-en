import { Job } from './entities/job';
import { JobListState } from './presenters/JobListState';
import { getDummyJobList } from './repository';

interface FetchOptions {
  perPage?: number;
  page?: number;
  orderBy?: number;
  order?: string;
}

export function fetchJobList(state: JobListState, options: FetchOptions) {
  const jobList = getDummyJobList();
  state.list.setValue(jobList);
}
