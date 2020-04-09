const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create schema
const CartSchema = new Schema({
  userId: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
  },
  products: [{}],
});

module.exports = Book = mongoose.model("Cart", CartSchema);
