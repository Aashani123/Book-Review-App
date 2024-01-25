// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  // other user properties
});

const User = mongoose.model('User', userSchema);

module.exports = User;
