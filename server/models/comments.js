const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create comment schema
const commentsSchema = new Schema({
    
        discussion_id: {
                type: String,
        },
        posted: {
                type: Date, 
                default: new Date()
        },
        text: {
                type: String, 
                default: ''
        }
        
});

module.exports = mongoose.model('comments', commentsSchema);


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