export class Employer {
  constructor(
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
  ) {}
}
