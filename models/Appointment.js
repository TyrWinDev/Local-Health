const mongoose = require("mongoose");
const User = require("./User");

const AppointmentSchema = new mongoose.Schema({
  doctor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

module.exports = mongoose.model("Patient", PatientSchema);
