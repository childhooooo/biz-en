import { withSessionRoute } from 'lib/session';

export default withSessionRoute(
  async function handler(req, res) {
    switch(req.method) {
      case 'POST':
        logoutRoute(req, res);
        break;
      default:
        logoutRoute(req, res);
    }
  }
);

function logoutRoute(req: any, res: any) {
  req.session.destroy();
  res.send({ ok: true });
}
