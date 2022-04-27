const mongoose = require('mongoose');
const { Schema } = mongoose;

const treeSchema = new Schema({
  id: String,
  type: {
    type: String,
  },
  coordinates: {
    lat: String,
    lng: String,
  },
  location: {
    strasse: String,
    plz: String,
    stadt: String,
  },
  status: {
    status: String,
  },
  info: String,
  comments: Array,
  picture: String,
  harvestPeriod: { start: Date, end: Date },
  ownerId: String,
});

module.exports = mongoose.model('Tree', treeSchema);
