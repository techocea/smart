const mongoose = require("mongoose");

const contactForm = new mongoose.Schema(
  {
    name: { type: String, required: true },
    contact: { type: Number, required: true },
    email: { type: String, required: true, unique: true },
    qualification: { type: String, required: true },
    path: { type: String, required: true },
    destination: { type: String, required: true },
    funds: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Forms", contactForm);
