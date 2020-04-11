const express = require("express");
const router = express.Router();
const comments = require("../../models/Comments");

router.get("/Comments", (req, res, next) => {
  //this will return all the data, exposing only the id and action field to the client
  comments
    .find()
    .then((data) => res.json(data))
    .catch(next);
});

router.post("/", (req, res, next) => {
  comments
    .create(req.body)
    .then((data) => res.json(data))
    .catch(next);

  //   }else {
  //     res.json({
  //       error: "The input field is empty"
  //     })
  //   }
});

router.delete("/Comments/:id", (req, res, next) => {
  comments
    .findOneAndDelete({ _id: req.params.id })
    .then((data) => res.json(data))
    .catch(next);
});

module.exports = router;
