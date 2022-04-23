export class Entry {
  constructor(
    public readonly id: number,
    public readonly jobId: number,
    public readonly seekerId: number
  ) {}

  static fromObject(obj: any): Entry {
    if(
      obj.id === null || obj.id === undefined ||
      obj.jobId === null || obj.jobId === undefined ||
      obj.seekerId === null || obj.seekerId === undefined
    ) {
      throw new Error('Any required fields are not found');
    }

    return new Entry(obj.id, obj.jobId, obj.seekerId);
  }
}

export class NewEntry {
  constructor(
    public readonly jobId: number,
    public readonly seekerId: number,
    public readonly title: string
  ) {}

  toSnake(): any {
    return {
      job_id: this.jobId,
      seeker_id: this.seekerId,
      title: this.title
    };
  }

  static fromObject(obj: any): NewEntry {
    if(
      obj.jobId === null || obj.jobId === undefined ||
      obj.seekerId === null || obj.seekerId === undefined
    ) {
      throw new Error('Any required fields are not found');
    }

    return new NewEntry(obj.jobId, obj.seekerId, obj.title);
  }
}
