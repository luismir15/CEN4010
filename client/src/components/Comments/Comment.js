import React from "react";
import StarRatings from "react-star-ratings";

//comment containers and defaults
export default function Comment(props) {
  const { name, text, rating, posted } = props.comment;
  return (
    <>
      <div class="col-md-3 text-center">
        <img
          class="rounded-circle reviewer"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTEFF6tCXWJuWRLxP0Ovu785xFo3oiw_kKf0ZRJCIGH0jbIFvo1&usqp=CAU"
        />
        <div class="caption">
          <small>
            by <a href="#Miguel">{name}</a>
          </small>
        </div>
      </div>
      <div class="col-md-9">
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
