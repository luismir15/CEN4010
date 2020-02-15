import React from 'react';


//useful for when you make calls to the api -- helps open a gateway to collect information
const api = require('axios');

//class
//will need this function when you call this class to get the id to call the book
class BookDetails extends React.Component {
constructor(props){
  super(props);
  this.state = {};
}
  render() {
    return (
      <div>
BookDetails Page
      </div>
    );
  }
}

export default BookDetails;
