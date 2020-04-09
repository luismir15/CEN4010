const express = require ('express');
const router = express.Router();
const wishlist = require('../../models/Wishlist');

router.get('/Wishlist', (req, res, next) => {

  //this will return all the data, exposing only the id and action field to the client
  wishlist.find({}, 'wishlist')
    .then(data => res.json(data))
    .catch(next)
});

router.post('/', (req, res, next) => {
        
    wishlist.create(req.body)
      .then(data => res.json(data))
      .catch(next)

      router.post('/', (req, res) => {
        const newBook = new Book({
            title: req.body.title,
            author: req.body.author,
            authorBio: req.body.authorBio,
            description: req.body.description,
            genre: req.body.genre,
            publisher: req.body.publisher,
            releaseDate: req.body.releaseDate,
            rating: req.body.rating
        });
    
        newBook.save().then(book => res.json(book));
    });

      
});

router.delete('/Wishlist/:id', (req, res, next) => {
  wishlist.findOneAndDelete({"_id": req.params.id})
    .then(data => res.json(data))
    .catch(next)
})

module.exports = router;