import React from 'react';
import {Container, Row, Col, Button, Image} from 'react-bootstrap';

//useful for when you make calls to the api -- helps open a gateway to collect information
import axios from 'axios';

//class
//will need this function when you call this class to get the id to call the book
class BookDetails extends React.Component {
  constructor(props) {
    super(props);
    console.log(props.match.params);
    this.state = {
        id:props.match.params.id,
        book:{}
    };
  }
  componentDidMount() {
    axios.get('http://localhost:4000/api/books/'+this.state.id)
      .then((res) => {
        this.setState({
          book: res.data
        });
      });
  }
  render() {

    return (
      <Container className="details">
        <Row>
          <Col className="details-img-col">
            <Image className="details-img" src={this.state.book.thumbnailUrl} fluid/>
          </Col>

          <Col className="details-Basics">
            <h1>
              {this.state.book.title}
            </h1>

            <h3>
              {this.state.book.authors}
            </h3>
            <hr />
            <h2>
              {this.state.book.price}
            </h2>

            <ul>
              <li>  ISBN: {this.state.book.isbn} </li>
              <li>  Publisher: {this.state.book.publisher} </li>
              <li>  Release Date: {this.state.book.publishedDate}</li>
              <li>  Genre: {this.state.book.genre}</li>
            </ul>

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
          <p>{this.state.book.shortDescription}</p>
        </Row>

        <Row className="customer-reviews">
            <h3>Customer Reviews</h3>



        </Row>

        <Row className="details-authorBio">
          <h3> Author Bio</h3>
          <p>{this.state.book.auth_bio}</p>
        </Row>
      </Container>
    );
  }
}

export default BookDetails;
