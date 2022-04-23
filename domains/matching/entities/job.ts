import { JobCategory } from './jobCategory';

export class Job {
  constructor(
    public readonly id: string,
    public readonly employerId: number,
    public readonly name: string,
    public readonly position: string,
    public readonly categories: number[],
    public readonly description: string,
    public readonly requirements: string,
    public readonly workAt: string,
    public readonly salary: string,
    public readonly officeHours: string,
    public readonly holiday: string,
    public readonly qualifications: string,
    public readonly employmentStatus: string,
    public readonly welfare: string | null,
    public readonly flow: string | null
  ) {}

  static fromObject(json: any): Job {
    if(!json.id || !json.name || !json.position || !json.description || !json.workAt || !json.salary || !json.officeHours || !json.holiday || !json.qualifications || !json.employmentStatus) {
      throw new Error('Any required fields are not found');
    }

    /*
    const categories = json.categories?.map((c: any) => {
      try {
        return JobCategory.fromJsonObject(c);
      } catch(e) {
        return null;
      }
    }).filter((c: JobCategory | null) => c !== null) || [];
    */

    return new Job(
      json.id,
      json.employerId,
      json.name,
      json.position,
      json.categories || [],
      json.description,
      json.requirements,
      json.workAt,
      json.salary,
      json.officeHours,
      json.holiday,
      json.qualifications,
      json.employmentStatus,
      json.welfare || null,
      json.flow || null
    );
  }
}
