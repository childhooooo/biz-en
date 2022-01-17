import { JobKind } from './jobKind';

export class Job {
  constructor(
    public readonly id: string,
    public readonly name: string
  ) {}
}
