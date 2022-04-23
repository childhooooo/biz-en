export class JobCategory {
  constructor(
    public readonly id: number,
    public readonly name: string,
    public readonly slug: string,
    public readonly color: string | null
  ) {}

  static fromObject(json: any): JobCategory {
    if(json.id === undefined || json.id === null || !json.name || !json.slug) {
      throw new Error('Some required fields are not found');
    }

    return new JobCategory(json.id, json.name, json.slug, json.color || null);
  }
}
