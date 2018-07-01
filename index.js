const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const keys = require('./config/keys');
// connect to the remote mongoDB
mongoose.connect(keys.mongoURI);
// require the data model
require('./models/User');
// require the password file to make sure it is running
// inside the password, we do not have any export, we just need it to exexute
require('./services/password');

//const authRoutes = require('./routes/authRoutes'); this method can be simplified
const app = express();

// use the body bodyParser
app.use(bodyParser.json());
// tell the passport module to use the cookie-session
app.use(
  cookieSession({
    // set the expire time for one cookie record
    maxAge: 30 * 24 * 60 * 60 * 1000,
    // encrytion of the session, prevent manually change the session id
    // also, we can use more than one key, it will randomly choose one from them
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
