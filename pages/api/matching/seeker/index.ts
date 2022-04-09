import bcrypt from 'bcrypt';
import type { NextApiRequest, NextApiResponse } from 'next'
import { Seeker, InputSeekerHashed, createSeeker } from 'domains/matching';

interface Result {
  message: string;
  seeker?: Seeker;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Result>) {
  let result = { status: 200, data: { message: '' } };

  switch (req.method) {
    case 'POST':
      result = await post(req.body);
      break;
    default:
      res.status(404).json({ message: 'Not found' });
  }

  res.status(result.status).json(result.data);
}

async function post(body: any) {
  let params;
  try {
    params = {
      ...body,
      password: await bcrypt.hash(body.password, 10)
    }
  } catch(e) {
    return { status: 500, data: { message: 'Failed to hash password' } };
  }

  let input;
  try {
    input = InputSeekerHashed.fromObject(params);
  } catch (e: any) {
    return { status: 400, data: { message: 'Invalid data' } };
  }

  let seeker;
  try {
    seeker = await createSeeker(input);
  } catch (e: any) {
    console.error(e);
    return { status: e.response?.status || 500, data: { message: e.message } };
  }

  if(seeker !== null) {
    return { status: 200, data: { message: 'OK', seeker } };
  } else {
    return { status: 404, data: { message: 'Not found' } };
  }
}
