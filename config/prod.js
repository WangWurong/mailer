// prod.js - production keys here
module.exports = {
  googleClientID: process.env.GOOGLE_CLIENT_ID,
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
  mongoURI: process.env.MONGO_URI,
  // set the cookie key
  cookieKey: process.env.COOKIE_KEY
};
