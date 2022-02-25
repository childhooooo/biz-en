import { withSessionRoute } from 'lib/session';

export default withSessionRoute(
  async function loginRoute(req, res) {
    req.session.seeker = {
      id: 'seekerid'
    };
    await req.session.save();
    res.send({ ok: true });
  }
);
