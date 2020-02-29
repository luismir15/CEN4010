import React, { Component } from "react";

// Link for comments page https://bootsnipp.com/snippets/E1bRy
class Comments extends Component {
  render() {
    return (
        <div class="reviews">
        <div class="row blockquote review-item">
            <div class="col-md-3 text-center">
            <img class="rounded-circle reviewer" src="https://drive.google.com/uc?id=1HRgRJ-wOZAn2uCWtOYLwTz774jUYHlro"/>
            <div class="caption">
                <small>by <a href="#Miguel">Miguel</a></small>
            </div>

            </div>
            <div class="col-md-9">
            <h3>Greatest book I've read</h3>
            <div class="ratebox text-center" data-id="0" data-rating="5"></div>
            <p class="review-text">Found myself hating to pause the reading. The author puts you right in the middle of Hogwarts. I'm looking forward to the whole series. </p>

            <small class="review-date">February 26, 2019</small>
            </div>                          
        </div>  
        </div>
            

    );
  }
}

export default Comments;