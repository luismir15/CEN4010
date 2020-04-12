const express = require ('express');
const router = express.Router();
const rating = require('../../models/Rating');

// @route GET api/Rating
// @desc Gets all the Rating within the database
router.get('/Rating', (req, res, next) => {

  //this will return all the data, exposing only the id and action field to the client
  rating.find({}, 'rating')
    .then(data => res.json(data))
    .catch(next)
});

router.post('/', (req, res, next) => {
        
    rating.create(req.body)
      .then(data => res.json(data))
      .catch(next)
      
//   }else {
//     res.json({
//       error: "The input field is empty"
//     })
//   }
});

// @route DELETE api/Rating/:userId/:id
// @desc DELETE the Rating within the database
router.delete('/Rating/:id', (req, res, next) => {
  rating.findOneAndDelete({"_id": req.params.id})
    .then(data => res.json(data))
    .catch(next)
})

module.exports = router;