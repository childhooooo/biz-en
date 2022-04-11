import axios from 'axios';
import { Employer, InputEmployer } from '../entities/employer';
import { Seeker, InputSeeker, Credential } from '../entities/seeker';
import { Job } from '../entities/job';
import { JobCategory } from '../entities/jobCategory';
import { Entry, NewEntry } from '../entities/entry';
import { EditRequest, InputEditRequest } from '../entities/editRequest';

export class WPParams {
  constructor(
    public readonly perPage: number,
    public readonly page: number,
    public readonly orderBy: string,
    public readonly order: 'asc' | 'desc'
  ) { }

  static defaultParams(): WPParams {
    return new WPParams(12, 1, 'date', 'desc');
  }

  static fromObject(obj: any): WPParams {
    const params = WPParams.defaultParams();
    return new WPParams(
      obj.perPage || params.perPage,
      obj.page || params.page,
      obj.orderBy || params.orderBy,
      obj.order || params.order
    );
  }
}

export function wpToEmployer(obj: any): Employer {
  try {
    return new Employer(
      obj.id,
      obj.acf.company_name,
      obj.acf.company_kana,
      obj.acf.website,
      obj.acf.department,
      obj.acf.lastname,
      obj.acf.firstname,
      obj.acf.email,
      obj.acf.tel,
      obj.acf.required_occupation,
      obj.acf.work_at
    );
  } catch (e) {
    throw new Error('Failed to parse object from WordPress to Employer');
  }
}

export async function createEmployer(input: InputEmployer): Promise<Employer> {
  let res;
  try {
    res = await axios(`${process.env.NEXT_PUBLIC_API_BASE}/wp/v2/employer`, {
      method: 'POST',
      auth: {
        username: process.env.APPLICATION_USER || '',
        password: process.env.APPLICATION_PASSWORD || ''
      },
      data: {
        title: input.companyName,
        status: 'publish',
        acf: input.toSnake()
      }
    });
  } catch (e: any) {
    throw new Error(`${e.response?.status || 500}: ${e.message}`);
  }

  return wpToEmployer(res.data);
}

export async function getEmployerByEmail(email: string): Promise<Employer | null> {
  let res;
  try {
    res = await axios(`${process.env.NEXT_PUBLIC_API_BASE}/wp/v2/employer?email=${email}`);
  } catch (e: any) {
    throw new Error(`${e.response?.status || 500}: ${e.message}`);
  }

  try {
    return res.data[0] ? wpToEmployer(res.data[0]) : null;
  } catch (e: any) {
    throw new Error(`Failed to parse response to Employer: ${e.message}`);
  }
}

export async function notifyNewEmployer(input: InputEmployer) {
  const data = new FormData();
  data.set('your-company', input.companyName);
  data.set('your-company-kana', input.companyKana);
  data.set('your-lastname', input.lastName);
  data.set('your-firstname', input.firstName);
  data.set('your-email', input.email);
  data.set('your-tel', input.tel);

  let res;
  try {
    res = await axios(`${process.env.NEXT_PUBLIC_API_BASE}/contact-form-7/v1/contact-forms/${process.env.NEXT_PUBLIC_NOTIFY_EMPLOYER_ID}/feedback`, {
      method: 'POST',
      data
    });
  } catch(e: any) {
    throw new Error(`${e.response?.status | 500}: ${e.message}`);
  }

  if(res.data.status !== 'mail_sent') {
    throw new Error(res.data.status);
  }
}

export function wpToSeeker(obj: any): Seeker {
  try {
    return Seeker.fromObject({
      ...obj,
      ...obj.acf,
      educationState: obj.acf.education_state,
      educationSchool: obj.acf.education_school,
      acceptEmail: obj.acf.accept_email,
      resumeId: obj.acf.resume
    });
  } catch (e) {
    throw new Error('Failed to parse object from WordPress to Seeker');
  }
}

export async function createSeeker(input: InputSeekerHashed): Promise<Seeker> {
  let res;
  try {
    res = await axios(`${process.env.NEXT_PUBLIC_API_BASE}/wp/v2/seeker`, {
      method: 'POST',
      auth: {
        username: process.env.APPLICATION_USER || '',
        password: process.env.APPLICATION_PASSWORD || ''
      },
      data: {
        title: input.name,
        status: 'publish',
        acf: input.toSnake()
      }
    });
  } catch (e: any) {
    throw new Error(`${e.response?.status || 500}: ${e.message}`);
  }

  return wpToSeeker(res.data);
}

export async function getSeekerByEmail(email: string): Promise<Seeker | null> {
  let res;
  try {
    res = await axios(`${process.env.NEXT_PUBLIC_API_BASE}/wp/v2/seeker?email=${email}`);
  } catch (e: any) {
    throw new Error(`${e.response?.status || 500}: ${e.message}`);
  }

  try {
    return res.data[0] ? wpToSeeker(res.data[0]) : null;
  } catch (e: any) {
    throw new Error(`Failed to parsae response to Seeker: ${e.message}`);
  }
}

export async function notifyNewSeeker(input: InputSeeker) {
  const data = new FormData();
  data.set('your-name', input.name);
  data.set('your-kana', input.kana);
  data.set('your-email', input.email);

  let res;
  try {
    res = await axios(`${process.env.NEXT_PUBLIC_API_BASE}/contact-form-7/v1/contact-forms/${process.env.NEXT_PUBLIC_NOTIFY_SEEKER_ID}/feedback`, {
      method: 'POST',
      data
    });
  } catch(e: any) {
    throw new Error(`${e.response?.status | 500}: ${e.message}`);
  }

  if(res.data.status !== 'mail_sent') {
    throw new Error(res.data.status);
  }
}

export function wpToJob(obj: any): Job {
  return Job.fromObject({
    ...obj,
    ...obj.acf,
    name: obj.title.rendered,
    employerId: obj.acf.employer_id,
    workAt: obj.acf.work_at,
    officeHours: obj.acf.office_hours,
    employmentStatus: obj.acf.employment_status,
    categories: obj.job_category
  });
}

export async function getJobs(params: WPParams): Promise<{ jobs: Job[], total: number }> {
  let res;
  try {
    res = await axios(`${process.env.NEXT_PUBLIC_API_BASE}/wp/v2/job?per_page=${params.perPage}&page=${params.page}&orderby=${params.orderBy}&order=${params.order}`);
  } catch (e: any) {
    throw new Error(`${e.response?.status || 500}: ${e.message}`);
  }

  return {
    jobs: res.data.map((d: any) => wpToJob(d)),
    total: parseInt(res.headers['x-wp-total'] || '0')
  };
}

export async function getJob(id: number): Promise<Job> {
  let res;
  try {
    res = await axios(`${process.env.NEXT_PUBLIC_API_BASE}/wp/v2/job/${id}`);
  } catch (e: any) {
    throw new Error(`${e.response?.status || 500}: ${e.message}`);
  }

  return wpToJob(res.data);
}

export function wpToJobCategory(obj: any): JobCategory {
  return JobCategory.fromObject({
    id: obj.id,
    name: obj.name,
    slug: obj.slug,
    color: obj.description
  });
}

export async function getJobCategories(): Promise<JobCategory[]> {
  let res;
  try {
    res = await axios(`${process.env.NEXT_PUBLIC_API_BASE}/wp/v2/job_category`);
  } catch (e: any) {
    throw new Error(`${e.response?.status || 500}: ${e.message}`);
  }

  return res.data.map((d: any) => wpToJobCategory(d));
}

export function wpToEntry(obj: any): Entry {
  return {
    id: obj.id,
    jobId: obj.acf.job_id,
    seekerId: obj.acf.seeker_id
  };
}

export async function createEntry(params: NewEntry): Promise<Entry> {
  let res;
  try {
    res = await axios(`${process.env.NEXT_PUBLIC_API_BASE}/wp/v2/entry`, {
      method: 'POST',
      auth: {
        username: process.env.APPLICATION_USER || '',
        password: process.env.APPLICATION_PASSWORD || ''
      },
      data: {
        status: 'publish',
        title: params.title,
        acf: params.toSnake()
      }
    });
  } catch(e: any) {
    throw new Error(`${e.response?.status || 500}: ${e.message}`);
  }

  return wpToEntry(res.data);
}

export async function notifyNewEntry(input: any) {
  const data = new FormData();
  data.set('your-name', input.name);
  data.set('your-email', input.email);
  data.set('target-job', input.job);

  let res;
  try {
    res = await axios(`${process.env.NEXT_PUBLIC_API_BASE}/contact-form-7/v1/contact-forms/${process.env.NEXT_PUBLIC_NOTIFY_ENTRY_ID}/feedback`, {
      method: 'POST',
      data
    });
  } catch(e: any) {
    throw new Error(`${e.response?.status | 500}: ${e.message}`);
  }

  if(res.data.status !== 'mail_sent') {
    throw new Error(res.data.status);
  }
}

export function wpToEditRequest(obj: any): EditRequest {
  return EditRequest.fromObject({
    id: obj.id,
    seekerId: obj.acf.seeker_id,
    editType: obj.acf.edit_type
  });
}

export async function createEditRequest(params: InputEditRequest): Promise<EditRequest> {
  let res;
  try {
    res = await axios(`${process.env.NEXT_PUBLIC_API_BASE}/wp/v2/edit_request`, {
      method: 'POST',
      auth: {
        username: process.env.APPLICATION_USER || '',
        password: process.env.APPLICATION_PASSWORD || ''
      },
      data: {
        status: 'publish',
        title: params.title,
        acf: params.toSnake()
      }
    });
  } catch(e: any) {
    throw new Error(`${e.response?.status || 500}: ${e.message}`);
  }

  return wpToEditRequest(res.data);
}

export async function notifyNewEditRequest(input: any) {
  const data = new FormData();
  data.set('your-email', input.email);
  data.set('your-name', input.name);
  data.set('your-kind', input.kind);
  data.set('your-details', input.details);

  let res;
  try {
    res = await axios(`${process.env.NEXT_PUBLIC_API_BASE}/contact-form-7/v1/contact-forms/${process.env.NEXT_PUBLIC_NOTIFY_EDIT_ID}/feedback`, {
      method: 'POST',
      data
    });
  } catch(e: any) {
    throw new Error(`${e.response?.status | 500}: ${e.message}`);
  }

  if(res.data.status !== 'mail_sent') {
    throw new Error(res.data.status);
  }
}
