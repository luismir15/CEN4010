import React from 'react';
import {Container, Row, Col, Button, Image} from 'react-bootstrap';

//useful for when you make calls to the api -- helps open a gateway to collect information
const api = require('axios');

//class
//will need this function when you call this class to get the id to call the book
class BookDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Harry Potter and the Cursed Child - Parts I & II",
      author: "by " + "J. K. Rowling, John Tiffany, Jack Thorne",
      isbn: "9781338099133",
      price: "$17.99",
      publisher: "Scholastic, Inc.",
      releaseDate: "07/31/2016",
      genre: "Fiction",
      description: "The Eighth Story. Nineteen Years Later. Based on an original new story by J.K. Rowling, John Tiffany, and Jack Thorne, a new play by Jack Thorne, Harry Potter and the Cursed Child is the eighth story in the Harry Potter series and the first official Harry Potter story to be...",
      authorBio: "J.K. Rowling is the author of the seven Harry Potter novels, which have sold over 450 million copies and have been translated into 79 languages, and three companion books originally published for charity. She is also the author of The Casual Vacancy, a novel for adults published in 2012, and, under the pseudonym of Robert Galbraith, is the author of the Cormoran Strike crime series. J.K. Rowling is making her screenwriting debut and is a producer on the film Fantastic Beasts and Where to Find Them, a further extension of the Wizarding World, due for release...",
      image: "https://images-na.ssl-images-amazon.com/images/I/71zWjTSsq1L.jpg",
      reviews: []
    };
  }
  render() {

    return (
      <Container className="details">
        <Row>
          <Col className="details-img-col">
            <Image className="details-img" src={this.state.image} fluid/>
          </Col>

          <Col className="details-Basics">
            <h1>
              {this.state.title}
            </h1>

            <h3>
              {this.state.author}
            </h3>
            <hr />
            <h2>
              {this.state.price}
            </h2>

            <ul>
              <li>  ISBN: {this.state.isbn} </li>
              <li>  Publisher: {this.state.publisher} </li>
              <li>  Release Date: {this.state.releaseDate}</li>
              <li>  Genre: {this.state.genre}</li>
                <li>
                <div class="rate">
                      <input type="radio" id="star5" name="rate" value="5" />
                      <label for="star5" title="text">5 stars</label>
                      <input type="radio" id="star4" name="rate" value="4" />
                      <label for="star4" title="text">4 stars</label>
                      <input type="radio" id="star3" name="rate" value="3" />
                      <label for="star3" title="text">3 stars</label>
                      <input type="radio" id="star2" name="rate" value="2" />
                      <label for="star2" title="text">2 stars</label>
                      <input type="radio" id="star1" name="rate" value="1" />
                      <label for="star1" title="text">1 star</label>
                    </div>
                </li>
              </ul>

              <Row className="details-buttons">
                    <div class="rate">
                      <input type="radio" id="star5" name="rate" value="5" />
                      <label for="star5" title="text">5 stars</label>
                      <input type="radio" id="star4" name="rate" value="4" />
                      <label for="star4" title="text">4 stars</label>
                      <input type="radio" id="star3" name="rate" value="3" />
                      <label for="star3" title="text">3 stars</label>
                      <input type="radio" id="star2" name="rate" value="2" />
                      <label for="star2" title="text">2 stars</label>
                      <input type="radio" id="star1" name="rate" value="1" />
                      <label for="star1" title="text">1 star</label>
                    </div>
                 </Row>

    
            <Row className="details-buttons">
                <Col className="addtoCartBtn" xs={6}>
                  <Button variant="primary" size="sm" block>ADD TO CART</Button>
                </Col>

                <Col className="addtoWishlistBtn" xs={6}>
                  <Button variant="light" size="sm" block>ADD TO WISHLIST</Button>
                </Col>
            </Row>

          </Col>

        </Row>

        <Row className="details-description">
          <div className="centering">
            <h3>Overview</h3>
          </div>
          <p>{this.state.description}</p>
        </Row>

        <Row className="customer-reviews">
            <h3>Customer Reviews</h3>
          


        </Row>

        <Row className="details-authorBio">
          <h3> Author Bio</h3>
          <p>{this.state.authorBio}</p>
        </Row>
      </Container>
    );
  }
}

export default BookDetails;