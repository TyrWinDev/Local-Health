const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const doctorSchema = new mongoose.Schema({
  firstname: {
    type: String,
    trim: true,
    required: "First name is required",
  },
  lastname: {
    type: String,
    trim: true,
    required: "Last name is required",
  },
  clinic: {
    type: String,
    trim: true,
  },
  phone: {
    type: String,
    trim: true,
    required: "Specialty is Required",
  },

  userCreated: {
    type: Date,
    default: Date.now,
  },
});

const doctor = mongoose.model("Doctor", doctorSchema);

module.exports = doctor;
