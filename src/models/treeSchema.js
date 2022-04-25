const mongoose = require('mongoose');
const { Schema } = mongoose;

const treeSchema = new Schema({
  type: String,
  location: String,
  active: Boolean,
  info: Text,
  comments: Array,
  picture: String,
  harvestPeriod: { start: Date, end: Date },
  ownerId: String,
});

module.exports = mongoose.model('Tree', treeSchema);
