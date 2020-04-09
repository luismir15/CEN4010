const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// New  Rating schema
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
