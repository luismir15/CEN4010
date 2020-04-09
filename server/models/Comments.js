const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// New comment schema
const commentsSchema = new Schema({
  discussion_id: {
    type: String,
  },
  posted: {
    type: Date,
    default: new Date(),
  },
  text: {
    type: String,
    default: "",
  },
  name: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("comments", commentsSchema);
