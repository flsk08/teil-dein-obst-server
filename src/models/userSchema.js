const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  name: String,
  email: String,
  favorites: Array,
  registeredTrees: Array,
  password: String,
  picture: String,
});

module.exports = mongoose.model('User', userSchema);
