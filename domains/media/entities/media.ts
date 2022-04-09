export class Media {
  constructor (
    public readonly id: number,
    public readonly name: string,
    public readonly mimeType: string,
    public readonly url: string
  ) {}

  static fromObject(obj: any): Media {
    if(obj.id === null || obj.id === undefined || !obj.name || !obj.mimeType || !obj.url) {
      throw new Error('Any required fields are not found');
    }

    return new Media(obj.id, obj.name, obj.mimeType, obj.url);
  }
}
