import React, { Component } from "react";
import Rating from './Rating';


class Comments extends Component {
  render() {
    return (
        <div class="reviews">
        <div class="row blockquote review-item">
            <div class="col-md-3 text-center">
            <img class="rounded-circle reviewer" src="http://standaloneinstaller.com/upload/avatar.png"/>
            <div class="caption">
                <small>by <a href="#joe">Joe</a></small>
            </div>

            </div>
            <div class="col-md-9">
            <h4>My awesome review</h4>
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