import React, { Component } from "react";
//import { Container } from "react-bootstrap/lib/Tab";
import {Container, Row, Col, Button, Image} from 'react-bootstrap';
 
class ShopCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Harry Potter and the Cursed Child - Parts I & II",
      price: "17.99"

    };
  }
  
  
  
  
  
  
  render() {
    return (
      <Container className="details">

<Row className="details-buttons">
                <Col className="addtoCartBtn" xs={6}>
                  <Button variant="primary" size="sm" block>ADD TO CART</Button>
                </Col>

                <Col className="addtoWishlistBtn" xs={6}>
                  <Button variant="light" size="sm" block>ADD TO WISHLIST</Button>
                </Col>
            </Row>

    <Row>
      <div>
        <h1>Shopping Cart</h1>
        <p> image test</p>
        <ol>
          <li>Order list</li>
          <li>Favorites</li>
          <li>etc</li>
          <li>etc</li>
        </ol>
      </div>
      </Row>
      </Container>
    );
  }
}
 
export default ShopCart;