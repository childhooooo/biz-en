export class Employer {
  constructor(
    public readonly id: string,
    public readonly companyName: string,
    public readonly companyKana: string,
    public readonly website: string | null,
    public readonly department: string,
    public readonly lastName: string,
    public readonly firstName: string,
    public readonly email: string,
    public readonly tel: string,
    public readonly requiredOccupation: string,
    public readonly workAt: string
  ) { }
}

export class InputEmployer {
  constructor(
    public readonly companyName: string,
    public readonly companyKana: string,
    public readonly website: string | null,
    public readonly department: string,
    public readonly lastName: string,
    public readonly firstName: string,
    public readonly email: string,
    public readonly reEmail: string,
    public readonly tel: string,
    public readonly requiredOccupation: string,
    public readonly workAt: string
  ) { }

  toSnake(): any {
    return {
      company_name: this.companyName,
      company_kana: this.companyKana,
      website: this.website,
      department: this.department,
      lastname: this.lastName,
      firstname: this.firstName,
      email: this.email,
      tel: this.tel,
      required_occupation: this.requiredOccupation,
      work_at: this.workAt
    }
  }

  static fromObject(obj: any): InputEmployer {
    if (
      !obj.companyName ||
      !obj.companyKana ||
      !obj.department ||
      !obj.lastName ||
      !obj.firstName ||
      !obj.email ||
      !obj.reEmail ||
      !obj.tel ||
      !obj.requiredOccupation ||
      !obj.workAt
    ) {
      throw new Error('Any required fields are not found');
    }

    return new InputEmployer(
      obj.companyName,
      obj.companyKana,
      obj.website,
      obj.department,
      obj.lastName,
      obj.firstName,
      obj.email,
      obj.reEmail,
      obj.tel,
      obj.requiredOccupation,
      obj.workAt
    );
  }
}

