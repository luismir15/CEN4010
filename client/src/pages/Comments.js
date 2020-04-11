import React, { Component } from "react";
import "../index.css";
import axios from "axios";
import comInput from "./comInput";

class Comments extends Component {
  handleSubmit = async (e) => {
    e.preventDefault();
    console.log();

    // const { data: { token } } = await axios.post('/api/auth/', { userId, password });
    // tokenService.store(token);
    // localStorage.setItem('userId', userId);
    // setAuthenticated(true);
  };

  state = {
    comments: [],
  };

  componentDidMount() {
    this.getComments();
  }

  getComments = () => {
    axios
      .get("/api/comments")
      .then((res) => {
        if (res.data) {
          this.setState({
            todos: res.data,
          });
        }
      })
      .catch((err) => console.log(err));
  };

  deleteComments = (id) => {
    axios
      .delete(`/api/comments/${id}`)
      .then((res) => {
        if (res.data) {
          this.getTodos();
        }
      })
      .catch((err) => console.log(err));
  };

  render() {
    let { comments } = this.state;

    return (
      <div>
        <comInput />
        <comInput getComments={this.getTodos} />

        <div class="reviews">
          <div class="row blockquote review-item">
            <div class="col-md-3 text-center">
              <img
                class="rounded-circle reviewer"
                src="https://imageog.flaticon.com/icons/png/512/16/16480.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF"
              />
              <div class="caption">
                <small>
                  by <a href="#Miguel">Miguel</a>
                </small>
              </div>
            </div>
            <div class="col-md-9">
              <h3>Greatest book I've read</h3>
              <div
                class="ratebox text-center"
                data-id="0"
                data-rating="5"
              ></div>
              <p class="review-text">
                Found myself hating to pause the reading. The author puts you
                right in the middle of Hogwarts. I'm looking forward to the
                whole series.{" "}
              </p>

              <small class="review-date">February 26, 2019</small>
            </div>
          </div>
        </div>
        <div class="col-md-9">
          <div class="review-text">
            <label for="name">Leave Review</label>
            <textarea
              name="message"
              id="message"
              class="form-control"
              rows="9"
              cols="25"
              required="required"
              placeholder="Write review here"
            ></textarea>
          </div>
        </div>
        <div class="col-md-12">
          <button
            type="submit"
            // onClick={handleSubmit}
            class="btn btn-primary pull-right"
            id="btnContactUs"
          >
            Post Review
          </button>
        </div>

        {/* <ListComments comments={comments} deleteComments={this.deleteComments}/> */}
      </div>
    );
  }
}

export default Comments;
