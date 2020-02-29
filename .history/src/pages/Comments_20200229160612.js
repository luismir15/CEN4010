import React, { Component } from "react";


class Comments extends Component {
  render() {
    return (
        <div class="reviews">
        <div class="row blockquote review-item">
            <div class="col-md-3 text-center">
            <img class="rounded-circle reviewer" src="https://cdn.geekwire.com/wp-content/uploads/2019/12/GroupPhoto-e1577801886654-630x557.jpg"/>
            <div class="caption">
                <small>by <a href="#joe">Joe</a></small>
            </div>

            </div>
            <div class="col-md-9">
            <h3>My awesome review</h3>
            <div class="ratebox text-center" data-id="0" data-rating="5"></div>
            <p class="review-text">My awesome review. My awesome review. My awesome review. My awesome review. My awesome review. My awesome review. My awesome review. My awesome review. My awesome review. My awesome review. My awesome review. </p>

            <small class="review-date">March 26, 2017</small>
            </div>                          
        </div>  
        </div>
            

    );
  }
}

export default Comments;