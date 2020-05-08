const Data = require("./../models/Data");

let motorDirec = "Nothing";
let ledGlow = "Nothing";
let temperature = "Nothing";
let humidity = "Nothing";

exports.getOverview = (req, res, next) => {
  console.log("Here");
  return res.status(200).json({
    title: "All Data",
    motorDirec: motorDirec,
    ledGlow: ledGlow,
    temperature: temperature,
    humidity: humidity,
  });
};

exports.updateOverview = async (req, res, next) => {
  console.log(req.body);

  const doc = await Data.create(req.body);

  motorDirec = req.body.motorDirection;
  ledGlow = req.body.ledGlow;
  temperature = req.body.temperature;
  humidity = req.body.humidity;
  return res.status(200).json({
    title: "All Data",
    motorDirec: motorDirec,
    ledGlow: ledGlow,
    temperature: temperature,
    humidity: humidity,
  });
};
