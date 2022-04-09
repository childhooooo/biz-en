export class InputContact {
  constructor(
    public readonly kind: string,
    public readonly name: string,
    public readonly company: string | null,
    public readonly tel: string | null,
    public readonly email: string,
    public readonly content: string
  ) {}

  static fromObject(obj: any): InputContact {
    if(!obj.kind || !obj.name || !obj.email || !obj.content) {
      throw new Error('Any required fields are not found');
    }

    return new InputContact(obj.kind, obj.name, obj.compnay || null, obj.tel || null, obj.email, obj.content);
  }
}
