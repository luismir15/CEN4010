const express = require("express");
const router = express.Router();
const Cart = require("../../models/Cart");

// @route GET api/Cart
// @desc Gets all the Carts within the database
// @access Public
router.get("/", (req, res) => {
  Cart.find().then((carts) => res.json(carts));
});

// @route GET api/Cart/:id
// @desc Gets all the Carts of a specific user within the database
// @access Public
router.get("/:id", (req, res) => {
  Cart.findOne({ userId: req.params.id }).then((cart) => res.json(cart));
});

// @route POST api/Cart
// @desc Post the Cart within the database
// @access Public
router.post("/", (req, res) => {
  const { data, userId } = req.body;
  Cart.findOne({
    userId,
    products: { $elemMatch: { _id: data._id } },
  }).then((cart) => {
    if (!cart) {
      Cart.update(
        { userId },
        { $push: { products: data } },
        {
          upsert: true,
        }
      )
        .then((data) => {
          res.json({ success: 1, data });
        })
        .catch((err) => res.json({ success: 0, message: err.message }));
    } else
      res.json({
        success: 0,
        message: "The product already exists in the wishlist",
      });
  });
});

// @route DELETE api/carts/:userId/:id
// @desc DELETE the Cart within the database
// @access Public
router.delete("/:userId/:id", (req, res) => {
  const { id, userId } = req.params;
  Cart.update({ userId }, { $pull: { products: { _id: id } } })
    .then(() => res.json({ success: 1 }))
    .catch((err) => res.json({ success: 0, message: err.message }));
});

module.exports = router;
