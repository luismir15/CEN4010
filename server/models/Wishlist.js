const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//new wishlist models
const WishListSchema = new Schema({
  userId: { type: String, required: true },
  products: [{}],
});

module.exports = mongoose.model("WishList", WishListSchema);
