const express = require ('express');
const router = express.Router();
const rating = require('../../models/Rating');

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

router.delete('/Rating/:id', (req, res, next) => {
  rating.findOneAndDelete({"_id": req.params.id})
    .then(data => res.json(data))
    .catch(next)
})

module.exports = router;