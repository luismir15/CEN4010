import React from "react";
import StarRatings from "react-star-ratings";
export default function Comment(props) {
  const { name, text, rating, posted } = props.comment;
  return (
    <>
      <div class="col-md-3 text-center">
        <img
          class="rounded-circle reviewer"
          src="https://drive.google.com/uc?id=1HRgRJ-wOZAn2uCWtOYLwTz774jUYHlro"
        />
        <div class="caption">
          <small>
            by <a href="#Miguel">{name}</a>
          </small>
        </div>
      </div>
      <div class="col-md-9">
        {/* <h3>Greatest book I've read</h3> */}
        <div class="ratebox text-center" data-id="0" data-rating="5"></div>
        <p>
          <StarRatings
            style={{ display: "block" }}
            starRatedColor="#FFCC00"
            starDimension="25px"
            rating={rating}
            numberOfStars={5}
          />
        </p>
        <p class="review-text">{text}</p>
        <small class="review-date">{new Date(posted).toDateString()}</small>
      </div>
    </>
  );
}
