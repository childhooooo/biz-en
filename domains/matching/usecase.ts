import { Job } from './entities/job';
import { JobListState, Order } from './presenters/JobListState';
import { getDummyJobList } from './repository';

interface FetchOptions {
  perPage?: number;
  page?: number;
  orderBy?: number;
  order?: string;
}

export function fetchJobList(state: JobListState) {
  const jobList = getDummyJobList();
  state.list.setValue(jobList);
}

export function fetchJobListOfPage(state: JobListState, page: number) {
  state.page.setValue(page);
  // Get options from state and the value of 'page'
  const jobList = getDummyJobList();
  state.list.setValue(jobList);
}

export function setPage(state: JobListState, page: number) {
  state.page.setValue(page);
}

export function setPerPage(state: JobListState, perPage: number) {
  state.perPage.setValue(perPage);
}

export function setOrder(state: JobListState, order: Order) {
  state.order.setValue(order);
}

export function setOrderBy(state: JobListState, orderBy: string) {
  state.orderBy.setValue(orderBy);
}
