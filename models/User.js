const bcrypt = require("bcrypt");
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  userName: { type: String, unique: true, required: true },
  email: { type: String, unique: true, required: true },
  firstName: { type: String, require: true, required: true },
  lastName: { type: String, require: true, required: true },
  phoneNumber: Number,
  streetAddress: String,
  postalCode: Number,
  municipality: String,
  role: String,
  specialty: String,
  password: String,
  patient: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "user",
    },
  ],
});

// Password hash middleware.

UserSchema.pre("save", function save(next) {
  const user = this;
  if (!user.isModified("password")) {
    return next();
  }
  bcrypt.genSalt(10, (err, salt) => {
    if (err) {
      return next(err);
    }
    bcrypt.hash(user.password, salt, (err, hash) => {
      if (err) {
        return next(err);
      }
      user.password = hash;
      next();
    });
  });
});

// Helper method for validating user's password.

UserSchema.methods.comparePassword = function comparePassword(
  candidatePassword,
  cb
) {
  bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
    cb(err, isMatch);
  });
};

module.exports = mongoose.model("User", UserSchema);
