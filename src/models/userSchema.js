const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  id: String,
  name: String,
  email: String,
  favorites: Array,
  registeredTrees: Array,
});

module.exports = mongoose.model('User', userSchema);
