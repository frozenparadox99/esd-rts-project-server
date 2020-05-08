const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  motorDirec: String,
  ledGlow: String,
  temperature: String,
  humidity: String,
  loggingTime: {
    type: Date,
    default: Date.now(),
  },
});

const Data = mongoose.model("data", dataSchema);

module.exports = Data;
