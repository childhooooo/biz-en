import { JobCategory } from './jobCategory';

export class Job {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly position: string,
    public readonly categories: JobCategory[],
    public readonly description: string,
    public readonly workAt: string,
    public readonly salary: string,
    public readonly officeHours: string,
    public readonly holiday: string,
    public readonly qualifications: string,
    public readonly employmentStatus: string,
    public readonly stateOfResidence: string | null,
    public readonly welfare: string | null,
    public readonly flow: string | null
  ) {}

  static fromJsonObject(json: any): Job {
    if(!json.id || !json.name || !json.position || !json.description || !json.workAt || !json.salary || !json.officeHours || !json.holiday || !json.qualifications || !json.employmentStatus) {
      throw new Error('Some required fields are not found');
    }

    const categories = json.categories?.map((c: any) => {
      try {
        return JobCategory.fromJsonObject(c);
      } catch(e) {
        return null;
      }
    }).filter((c: JobCategory | null) => c !== null) || [];

    return new Job(
      json.id,
      json.name,
      json.position,
      categories,
      json.description,
      json.workAt,
      json.salary,
      json.officeHours,
      json.holiday,
      json.qualifications,
      json.employmentStatus,
      json.stateOfResidence || null,
      json.welfare || null,
      json.flow || null
    );
  }
}
