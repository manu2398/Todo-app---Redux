const mongoose = require("mongoose");

const todoModel = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    isDone: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("todo", todoModel);
