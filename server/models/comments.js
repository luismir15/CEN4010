const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create comment schema
const commentSchema = new Schema({
    
comments:  {
            _id: ObjectId,
            discussion_id: ObjectId,
            slug: '34db',
            posted: ISODateTime,
            author: {
                    id: ObjectId,
                    name: ''
                    },
            text: ''
            }
});

module.exports = Comments = mongoose.model('comments', commentsSchema);


// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// //create schema for todo
// const TodoSchema = new Schema({
//   action: {
//     type: String,
//     required: [true, 'The todo text field is required']
//   }
// })

// //create model for todo
// const Todo = mongoose.model('todo', TodoSchema);

// module.exports = Todo;