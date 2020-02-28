import React, { Component } from "react";
 
class Library extends Component {
  render() {
    return (
      <div>
        <h1>Library</h1>
        <p>List of bought books</p>
        <ol>
          <li>go to book</li>
          <li>rate the book</li>
          <li>check other details</li>
        </ol>
      </div>
    );
  }
}
 
export default Library;