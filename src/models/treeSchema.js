const mongoose = require('mongoose');
const { Schema } = mongoose;

const treeSchema = new Schema({
  type: Array,
  coordinates: {
    lat: Schema.Types.Decimal128,
    lng: Schema.Types.Decimal128,
  },
  location: {
    address: String,
  },
  active: { type: Boolean, default: true },
  info: String,
  picture: String,
  harvestPeriod: { start: String, end: String },
  userId: String,
  pictureURL: String,
});

module.exports = mongoose.model('Tree', treeSchema);
