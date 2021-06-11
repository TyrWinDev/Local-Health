const mongoose = require("mongoose");
const User = require("./User");

const AppointmentSchema = new mongoose.Schema({
  doctor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  patient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  symptoms: String,
  date: {
    type: date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Appointment", AppointmentSchema);
