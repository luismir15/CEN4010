import React, { Component } from "react";


class Comments extends Component {
  render() {
    return (
        <div class="reviews">
        <div class="row blockquote review-item">
            <div class="col-md-3 text-center">
            <img class="rounded-circle reviewer" src="https://photos.google.com/share/AF1QipOOQtRW3t5OJ4JofAfwoo4Y5Upsh7vvagI7SrERuPIlQqScBsvv52njRyGWikDJxw/photo/AF1QipMNYyw06x-AnX0A02W1bfoyKUUERg5e23csvXRc?key=bjFDcHhlRjlabVg0MmVzNlotbVc2SFI2SHV0ZzBR"/>
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