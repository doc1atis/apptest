const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
const petSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    unique: true,
    minlength: [3, "name mus be at least 3 characters"],
    maxlength: 200,
    trim: true,
  },
  petType: {
    type: String,
    required: [true, "Pet Type is required"],
    minlength: 3,
    maxlength: 200,
    trim: true,
  },
  description: {
    type: String,
    required: [true, "Description is required"],
    minlength: 5,
    maxlength: 400,
    trim: true,
  },
  likes: {
    type: Number,
    get: (v) => Math.round(v),
    set: (v) => Math.round(v),
    default: 0,
  },
  skills: [{ type: String, minlength: 1, maxlength: 76, trim: true }],
});
// add plugin
petSchema.plugin(uniqueValidator, {
  message: "this {PATH} already exist.",
});
module.exports = mongoose.model("pet", petSchema);
