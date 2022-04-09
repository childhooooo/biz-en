import { Job } from './entities/job';
import { JobListState, Order } from './presenters/JobListState';
import { SeekerAuthState } from './presenters/SeekerAuthState';
import { getJobs } from './repository';

interface FetchOptions {
  perPage?: number;
  page?: number;
  orderBy?: number;
  order?: string;
}

export async function fetchJobList(state: JobListState) {
  try {
    const jobList = await getJobs({
      perPage: state.perPage.value,
      page: state.page.value,
      orderBy: state.orderBy.value,
      order: state.order.value.toString()
    });
    if(jobList) {
      state.list.setValue(jobList.jobs);
      state.size.setValue(jobList.total);
    }
  } catch(e) {
    console.error(e);
  }
}

export async function fetchJobListOfPage(state: JobListState, page: number) {
  state.page.setValue(page);

  try {
    const jobList = await getJobs({
      perPage: state.perPage.value,
      page,
      orderBy: state.orderBy.value,
      order: state.order.value.toString()
    });
    if(jobList) {
      state.list.setValue(jobList.jobs);
      state.size.setValue(jobList.total);
    }
  } catch(e) {
    console.error(e);
  }
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

export async function signIn(state: SeekerAuthState, email: string, password: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_PATH}/api/seeker/login`, {
    method: 'POST',
    body: JSON.stringify({ email, password })
  });

  if(!res.ok) {
    throw new Error(`Failed to POST: ${res.status} ${res.statusText}`);
  }

  const data = await res.json();

  if(data.seekerId) {
    state.seekerId.setValue(data.seekerId);
  } else {
    throw new Error('Unexpected Error');
  }
}

export async function signedIn(state: SeekerAuthState, seekerId: string) {
  state.seekerId.setValue(seekerId);
}
