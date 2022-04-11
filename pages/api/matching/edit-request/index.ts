import type { NextApiRequest, NextApiResponse } from 'next'
import { EditRequest, InputEditRequest, createEditRequest, notifyNewEditRequest } from 'domains/matching';

interface Result {
  message: string;
  editRequest?: EditRequest;
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
  let input;
  try {
    input = InputEditRequest.fromObject(body);
  } catch (e: any) {
    return { status: 400, data: { message: 'Invalid data' } };
  }

  let editRequest;
  try {
    editRequest = await createEditRequest(input);
  } catch (e: any) {
    console.error(e);
    return { status: e.response?.status || '500', data: { message: e.message } };
  }

  if(editRequest !== null) {
    return { status: 200, data: { message: 'OK', editRequest } };
  } else {
    return { status: 404, data: { message: 'Not found' } };
  }
}
