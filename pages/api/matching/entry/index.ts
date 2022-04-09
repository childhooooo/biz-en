import type { NextApiRequest, NextApiResponse } from 'next'
import { Entry, NewEntry, createEntry } from 'domains/matching';

interface Result {
  message: string;
  entry?: Entry;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Result>) {
  let result = { status: 200, data: { message: '' } };

  switch (req.method) {
    case 'POST':
      result = await post(req.body);
      break;
    default:
      res.status(404).json({ message: 'Not found' });
      return;
  }

  res.status(result.status).json(result.data);
}

async function post(body: any): Promise<{ status: number, data: Result }> {
  let params;
  try {
    params = NewEntry.fromObject(body);
  } catch (e: any) {
    return { status: 400, data: { message: 'Invalid data' } };
  }

  let entry;
  try {
    entry = await createEntry(params);
  } catch (e: any) {
    console.error(e);
    return { status: e.response?.status || '500', data: { message: e.message } };
  }

  if(entry !== null) {
    return { status: 200, data: { message: 'OK', entry } };
  } else {
    return { status: 404, data: { message: 'Not found' } };
  }
}
