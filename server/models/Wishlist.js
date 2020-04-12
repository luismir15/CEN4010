const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Wishlist schema
const WishListSchema = new Schema({
  userId: { type: String, required: true },
  products: [{}],
});

module.exports = mongoose.model("WishList", WishListSchema);
