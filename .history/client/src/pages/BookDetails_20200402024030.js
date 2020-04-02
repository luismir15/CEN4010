import React from 'react';
// import Comments from './Comments';
// import Rating from './Rating';
import Popup from 'reactjs-popup';
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
      id: props.match.params.id,
      book: {}
    };
  }
  componentDidMount() {
    axios.get('http://localhost:4000/api/books/' + this.state.id).then((res) => {
      this.setState({book: res.data});
      console.log(res.data);
    });
  }
  render() {

    return (
      <Container className="details">
      <Row>
        <Col>
          <Row>
            <Col className="details-img-col center-it">
              <Popup modal="modal" trigger={<Button className=" btn btn-primary img"> <Image className = "details-img-col"
                src = { this.state.book.thumbnailUrl} />< /Button>} position="right center">
                <Image className="details-img-zoom" src={this.state.book.thumbnailUrl}/>
              </Popup>
            </Col>


            <Col className="center-it">
              <h1 className="center-it">
                {this.state.book.title}
              </h1>

              <h3 className="center-it">
                {this.state.book.authors}
              </h3>

              <h2 className="center-it">
                {this.state.book.price}
              </h2>

              <ul>
                <li>
                  ISBN: {this.state.book.isbn}
                </li>
                <li>
                  Publisher: {this.state.book.publisher}
                </li>
                <li>
                  Release Date: {this.state.book.publishedDate}</li>
                <li>
                  Genre: {this.state.book.genre}</li>
                <li>
                  Categories: {this.state.book.categories}</li>
                  <li>
                    Rating: {this.state.book.rating}</li>
              </ul>

                <Button variant="primary" size="lg">ADD TO CART</Button>
                <Button variant="light" size="lg">ADD TO WISHLIST</Button>

            </Col>
          </Row>
<Row>
<Col xs={4}></Col>
</Row>
          <Row className="details-description">
            <h3>Overview</h3>
            <p>{this.state.book.shortDescription}</p>
          </Row>

          <Row className="details-description">
            <h3>Customer Reviews</h3>
          </Row>

          <Row className="details-description">
            <h3>Author Bio</h3>
            <p>{this.state.book.auth_bio}</p>
          </Row>
        </Col>
      </Row>
    </Container>)
  }
}

export default BookDetails;
