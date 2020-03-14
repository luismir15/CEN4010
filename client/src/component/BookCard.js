import React, { Component } from 'react';


const BookCard = (props) => {
    const { volumeInfo } = props.info;
    const { saleInfo } = props.info;
    const {title, authors, averageRating, subtitle, publishedDate} = props.info.volumeInfo;
    const price = saleInfo.hasOwnProperty('listPrice') == false ? "$0.00" : saleInfo.listPrice.amount;
    const thumbNail = volumeInfo.hasOwnProperty('imageLinks') == false ? "https://vignette.wikia.nocookie.net/pandorahearts/images/a/ad/Not_available.jpg/revision/latest?cb=20141028171337" : volumeInfo.imageLinks.thumbnail;
    const publishYear = volumeInfo.hasOwnProperty('publishedDate') == false ? volumeInfo['publishedDate'] = "0000" : volumeInfo.publishedDate;

    return (
      
      <div className="card-container">
        <img src={thumbNail} alt=""/>
        <div className="desc">
          <h2>{title}</h2>
          <p>Author: {authors}</p>
          <p>Price: {price}</p>
          <p>Raiting: {averageRating == "0.00" ? "Not available" : averageRating}</p>
          <p>Published: {publishYear == "0000" ? "Not available" : publishYear.substring(0,4)}</p>                        
        </div>
      </div>
      
      
    );
}

export default BookCard;
