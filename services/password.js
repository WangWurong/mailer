const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
// ./ means look into the current directory
// ../ means go up one directory
const keys = require('../config/keys');
// we are not going to require the mongoDB again and User file
// instead, we only insert the user model
const User = mongoose.model('users');

// serialize the user, that is get the profile id and return the record id in mongoDB
passport.serializeUser((user, done) => {
  done(null, user.id);
});

// deserialize the user, get the exact user instance by the record id
passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback'
    },
    (accessToken, refreshToken, profile, done) => {
      // find the first record that has the particular google id
      // in js, we can not create a const variable to store the users
      // because it is aynchronous request, therefore, we use promise in ES6
      // that means, after we get the return value, "then" we do sth
      User.findOne({ googleId: profile.id }).then(existingUser => {
        if (existingUser) {
          // the user already exist
          done(null, existingUser);
        } else {
          // if not exist, we will store the google user id into the mongoDB
          new User({ googleId: profile.id }).save().then(user => {
            done(null, user);
          });
        }
      });
    }
  )
);
