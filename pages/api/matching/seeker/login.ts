import bcrypt from 'bcrypt';
import { withSessionRoute } from 'lib/session';
import { getSeekerByEmail } from 'domains/matching';

export default withSessionRoute(
  async function handler(req, res) {
    switch(req.method) {
      case 'POST':
        loginRoute(req, res);
        break;
      default:
        loginRoute(req, res);
    }
  }
);

async function loginRoute(req: any, res: any) {
  const body = req.body;

  if(!body.email || !body.password) {
    res.status(400).json({ message: 'Email and Password are required.' });
    return;
  }

  let seeker;
  try {
    seeker = await getSeekerByEmail(body.email);
    if(!seeker) {
      req.session.destroy();
      res.status(403).json({ message: 'Seeker not found.' });
      return;
    }
  } catch(e) {
    req.session.destroy();
    res.status(500).json({ message: 'Failed to fetch Seeker' });
    return;
  }

  const result = await bcrypt.compare(body.password, seeker.password || '');
  if(result) {
    req.session.seeker = seeker;
  } else {
    req.session.destroy();
    res.status(403).json({ message: 'Incorrect password' });
  }
  await req.session.save();
  res.status(200).json({ seeker: seeker });
}
