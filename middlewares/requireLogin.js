module.exports = (req, res, next) => {
  // if there is no user logged in, should just return
  if (!req.user) {
    return res.status(401).send({
      error: 'You must log in!'
    });
  }
  // if user actually logged in, continue to the next middleware
  next();
};
