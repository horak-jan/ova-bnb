const mongoose = require("mongoose");

const CarSchema = new mongoose.Schema(
  {
    make: {
      type: String,
      required: true,
    },
    model: {
      type: String,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
    seats: {
      type: Number,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    dayPrice: {
      type: Number,
      required: true,
    },
    doors: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    range: {
      type: Number,
      required: true,
    },
    price: [
      {
        type: Number,
      },
    ],
    image: [
      {
        type: String,
      },
    ],
    booked: [
      {
        type: Date,
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Car", CarSchema);
