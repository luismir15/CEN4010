import React, { Component } from "react";
 
class WishList extends Component {
  render() {
    return (
      <div>
        <h1>Wish List</h1>
        <p>jut a wish list, books to buy</p>
        <ol>
          <li>just a list</li>
          <li>
          <div className="book-wrapper">
                <div className="flexbox-item flexbox-item-1" >
                    <img className="fit-container" src="https://kbimages1-a.akamaihd.net/52c896b6-2750-4c3d-a844-0760f23117f9/353/569/90/False/how-to-study-smart-study-secrets-of-an-honors-student.jpg" />
                </div>
                <h4>How to study</h4>
            </div>
          <div className="book-wrapper">
                <div className="flexbox-item flexbox-item-1" >
                    <img className="fit-container" src="https://kbimages1-a.akamaihd.net/52c896b6-2750-4c3d-a844-0760f23117f9/353/569/90/False/how-to-study-smart-study-secrets-of-an-honors-student.jpg" />
                </div>
                <h4>How to study</h4>
            </div>

          </li>
          <div>
            <ul className="flexbox-container">

            <div className="book-wrapper">
                <div className="flexbox-item flexbox-item-1" >
                    <img className="fit-container" src="https://kbimages1-a.akamaihd.net/52c896b6-2750-4c3d-a844-0760f23117f9/353/569/90/False/how-to-study-smart-study-secrets-of-an-honors-student.jpg" />
                </div>
                <h4>How to study</h4>
            </div>

            <div className="book-wrapper">
                <div className="flexbox-item flexbox-item-2">
                    <img className="fit-container" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1457542606l/25136217._SY475_.jpg" />
                </div>
                <h4>Up and Going</h4>
            </div>
            </ul>
          </div>
                </ol>
              </div>
    );
  }
}
 
export default WishList;

