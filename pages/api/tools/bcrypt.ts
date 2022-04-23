import bcrypt from 'bcrypt';
import type { NextApiRequest, NextApiResponse } from 'next'

interface Result {
  message: string;
  hashed?: string | null;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Result>) {
  let result: { status: number, data: Result } = { status: 200, data: { hashed: null, message: '' } };

  switch (req.method) {
    case 'POST':
      const hashed = await bcrypt.hash(req.body.password, 10);
      result = {
        status: 200,
        data: {
          hashed,
          message: 'Success'
        }
      };
      break;
    default:
      res.status(404).json({ message: 'Not found' });
  }

  res.status(result.status).json(result.data);
}
