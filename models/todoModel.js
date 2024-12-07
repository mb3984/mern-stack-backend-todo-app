const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false, // Default value is false (not completed)
  },
});

module.exports = mongoose.model("ToDo", todoSchema);
