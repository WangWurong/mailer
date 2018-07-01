const passport = require('passport');
// we need to export the functions in this profile
module.exports = app => {
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  app.get(
    '/auth/google/callback',
    passport.authenticate('google'),
    (req, res) => {
      res.redirect('/surveys');
    }
  );

  app.get('/api/logout', (req, res) => {
    // support by passport module, automatically delete the session id in the cookie
    req.logout();
    // use the responce to send the user that just logged out, just for proving
    // under this situation, the web will return a blank page, because there is no current user
    // res.send(req.user);
    // updated version, redirect
    res.redirect('/');
  });

  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });
};
