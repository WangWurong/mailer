// Create the mongo user model(class)
// First require the mongoose module
const mongoose = require('mongoose');
// equal to const Schema = mongoose.Schema;
// just showing that mongoose has a property called schema and use this schema module
// schema helps the mongoose to know ahead all the different properties in mongoDB
const { Schema } = mongoose;

// Schema is used for describing the structure of the user model
const userSchema = new Schema({
  googleId: String,
  credits: { type: Number, default: 0 }
});
// create the user model using this Schema, load this in mongoDB
mongoose.model('users', userSchema);

// make sure this file will be run when the server start, so add its path to index
