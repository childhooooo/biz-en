import { withSessionRoute } from 'lib/session';

export default withSessionRoute(
  function logoutRoute(req, res, session) {
    req.session.destroy();
    res.send({ ok: true });
  }
);
