import { withSessionRoute } from 'lib/session';

export default withSessionRoute(
  function logoutRoute(req, res) {
    req.session.destroy();
    res.send({ ok: true });
  }
);
