const mongoose = require("mongoose");
const { Schema } = mongoose;

const treeSchema = new Schema({
  type: String,
  coordinates: {
    lat: Schema.Types.Decimal128,
    lng: Schema.Types.Decimal128,
  },
  location: {
    strasse: String,
    plz: Number,
    stadt: String,
  },
  active: { type: Boolean, default: true },
  info: String,
  comments: Array,
  picture: String,
  harvestPeriod: { start: Date, end: Date },
  userId: String,
});

module.exports = mongoose.model("Tree", treeSchema);
