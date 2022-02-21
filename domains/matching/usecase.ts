import { Job } from './entities/job';
import { JobListState, Order } from './presenters/JobListState';
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

export function setPerPage(state: JobListState, perPage: number) {
  state.perPage.setValue(perPage);
}

export function setPage(state: JobListState, page: number) {
  state.page.setValue(page);
}

export function setOrder(state: JobListState, order: Order) {
  state.order.setValue(order);
}

export function setOrderBy(state: JobListState, orderBy: string) {
  state.orderBy.setValue(orderBy);
}
