const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WishListSchema = new Schema({
  userId: { type: String, required: true },
  products: [{}],
});

module.exports = mongoose.model("WishList", WishListSchema);
