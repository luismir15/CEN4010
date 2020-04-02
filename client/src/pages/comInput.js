import React, { Component } from 'react';
import axios from 'axios';


class comInput extends Component {

  state = {
    comments: ""
  }

  addComment = () => {
    const task = {comments: this.state.comments}

    if(task.comments && task.comments.length > 0){
      axios.post('/api/comments', task)
        .then(res => {
          if(res.data){
            this.props.getTodos();
            this.setState({comments: ""})
          }
        })
        .catch(err => console.log(err))
    }else {
      console.log('input field required')
    }
  }

  handleChange = (e) => {
    this.setState({
      comments: e.target.value
    })
  }

  render() {
    let { comments } = this.state;
    return (
      <div>
        <input type="text" onChange={this.handleChange} value={comments} />
        <button onClick={this.addTodo}>add comment</button>
      </div>
    )
  }
}

export default comInput


//  <div class="col-md-6">
//  <div class="form-group">
//      <label for="name">
//          Message</label>
//      <textarea name="message" id="message" class="form-control" rows="9" cols="25" required="required"
//          placeholder="Message"></textarea>
//  </div>
// </div>
// <div class="col-md-12">
//  <button type="submit" class="btn btn-primary pull-right" id="btnContactUs">
//      Send Message</button>
// </div>