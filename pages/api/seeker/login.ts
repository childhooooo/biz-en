import { withSessionRoute } from 'lib/session';

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
  const body = JSON.parse(req.body);

  if(!body.email || !body.password) {
    res.status(400).json({ message: 'Email and Password are required.' });
    return;
  }

  // Get Seeker from DB
  const seekerId = '1'
  req.session.seeker = {
    id: seekerId
  };
  await req.session.save();
  res.status(200).json({ seekerId });
}
