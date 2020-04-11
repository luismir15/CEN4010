const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create comment schema
const ratingSchema = new Schema({


        discussion_id: {
                type: String,
        },
        posted: {
                type: Date, 
                default: new Date()
        },
        rateCount :{
                type: Array,
		default: []
        },
        rateValue :{
                type: Array,
		default: []
        },
        rateAverage :{
                type: Array,
		default: []
        }
        
});

module.exports = Rating = mongoose.model('rating', ratingSchema);


// https://stackoverflow.com/questions/26914380/schema-for-user-ratings-key-value-db
// https://www.digitalocean.com/community/tutorials/getting-started-with-the-mern-stack
