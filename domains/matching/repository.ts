import { Job } from './entities/job';
import { JobCategory } from './entities/jobCategory';
import { Employer, InputEmployer } from './entities/employer';
import { Seeker, InputSeekerHashed } from './entities/seeker';
import { Entry, NewEntry } from './entities/entry';
import { EditRequest, InputEditRequest } from './entities/editRequest';
import * as WordPress from './adapters/wordpress';

export async function createEmployer(input: InputEmployer): Promise<Employer> {
  return WordPress.createEmployer(input);
}

export async function getEmployerByEmail(email: string): Promise<Employer | null> {
  return WordPress.getEmployerByEmail(email);
}

export async function createSeeker(input: InputSeekerHashed): Promise<Seeker> {
  return WordPress.createSeeker(input);
}

export async function getSeekerByEmail(email: string): Promise<Seeker | null> {
  return WordPress.getSeekerByEmail(email);
}

export async function getJobs(params: any): Promise<{ jobs: Job[], total: number }> {
  const wpParams = WordPress.WPParams.fromObject(params);
  return WordPress.getJobs(wpParams);
}

export async function getJob(id: number): Promise<Job> {
  return WordPress.getJob(id);
}

export async function getJobCategories(): Promise<JobCategory[]> {
  return WordPress.getJobCategories();
}

export async function createEntry(params: NewEntry): Promise<Entry> {
  return WordPress.createEntry(params);
}

export async function createEditRequest(params: InputEditRequest): Promise<EditRequest> {
  return WordPress.createEditRequest(params);
}
