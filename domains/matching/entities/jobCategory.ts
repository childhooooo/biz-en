export class JobCategory {
  constructor(
    public readonly name: string,
    public readonly slug: string,
    public readonly color: string | null
  ) {
    this.name = name;
    this.slug = slug;
    this.color = color;
  }

  static fromJsonObject(json: any): JobCategory {
    if(!json.name || !json.slug) {
      throw new Error('Some required fields are not found');
    }

    return new JobCategory(json.name, json.slug, json.color || null);
  }
}
