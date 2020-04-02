const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create comment schema
const ratingSchema = new Schema({
rating: {
        _id: ObjectId,
        discussion_id: ObjectId,
        slug: '34db',
        posted: ISODateTime,
        rateCount : '',
        rateValue : '',
        rateAverage: ''
        }
});

module.exports = Rating = mongoose.model('rating', ratingSchema);


// https://stackoverflow.com/questions/26914380/schema-for-user-ratings-key-value-db
// https://www.digitalocean.com/community/tutorials/getting-started-with-the-mern-stack