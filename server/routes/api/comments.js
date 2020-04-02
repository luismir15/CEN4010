const express = require ('express');
const router = express.Router();
const Todo = require('../models/Comments');

router.get('/Comments', (req, res, next) => {

  //this will return all the data, exposing only the id and action field to the client
  Todo.find({}, 'comments')
    .then(data => res.json(data))
    .catch(next)
});

router.post('/Comments', (req, res, next) => {
  if(req.body.action){
    Todo.create(req.body)
      .then(data => res.json(data))
      .catch(next)
  }else {
    res.json({
      error: "The input field is empty"
    })
  }
});

router.delete('/Comments/:id', (req, res, next) => {
  Todo.findOneAndDelete({"_id": req.params.id})
    .then(data => res.json(data))
    .catch(next)
})

module.exports = router;

