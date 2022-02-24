export class User {
  constructor(
    public readonly id: string,
    public readonly email: string,
    public readonly name: string
  ) {}

  static fromObject(obj: any): User {
    if(!obj.id || !obj.email || !obj.name) {
      throw new Error('Some required fields are not found');
    }

    return new User(
      obj.id,
      obj.email,
      obj.name
    );
  }
}
