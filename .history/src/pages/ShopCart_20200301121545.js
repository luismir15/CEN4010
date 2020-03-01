import React, { Component } from "react";
//import { Container } from "react-bootstrap/lib/Tab";
import {Container, Row, Col, Button, Image} from 'react-bootstrap';

const api = require('axios');
 
class ShopCart extends React.Component {
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
	  
	  <Container className="cartDetails">

				  <Row>
	 <div>
		<h1>Shopping Cart</h1>
	  </div>
	  
	  </Row>
	  <Row>
	  <div className="cart-wrapper">
                <div className="cartbox-item cartbox-item-1" >
                    <img className="cartImage-container" src="https://kbimages1-a.akamaihd.net/52c896b6-2750-4c3d-a844-0760f23117f9/353/569/90/False/how-to-study-smart-study-secrets-of-an-honors-student.jpg" />
                </div>
            </div>
			  </Row>
			  
			<Row className="details-buttons">
				<div className="addtoCartBtn" xs={6}>
				  <Button variant="outline-secondary" size="lg" block>REMOVE FROM CART</Button>
				</div>

				<div className="addtoWishlistBtn" xs={6}>
				  <Button variant="outline-secondary" size="lg" block>ADD TO WISHLIST</Button>
				</div>
				
				<div className="addtoWishlistBtn" xs={6}>
				  <Button variant="outline-secondary" size="lg" block>UPDATE QUANTITY</Button>
				</div>
				
				<div className="addtoWishlistBtn" xs={6}>
				  <Button variant="outline-secondary" size="lg" block>SAVE FOR LATER</Button>
				</div>
			</Row>
			
			<div>
			<p class="total">Total Price: $17.00</p>
			</div>

	  </Container>
	  	  
	
	  
	);
  }
}
 
export default ShopCart;