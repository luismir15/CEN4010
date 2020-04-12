<<<<<<< HEAD
import React from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import Books from '../components/Browsing/Books';
import '../components/Browsing/Browsing.css';


=======
import React from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
>>>>>>> 73ffc7e4095009751ddfd9e3d4aa2c6b5d2177ad

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      books: [],
    };
  }

  async componentDidMount() {
    axios.get("http://localhost:3002/api/books").then((res) => {
      this.setState({
        books: res.data,
      });
    });
  }

<<<<<<< HEAD
render(){
  return(
    <div>
        <div className="Browsing">
          <Books/>
        </div>
        <ul className="flexbox-container">
        {this.state.books.map((book)=>(
          <li>
            <NavLink to={`/Book/${book._id}`} style={{ textDecoration: 'none' }}>
              <div className="book-wrapper">
                  <div className="flexbox-item flexbox-item-3">
                    <img className="fit-container" src={book.thumbnailUrl}/>
                  </div>
                  <p>{book.title}</p>
                  <p>by {book.authors}</p>
              </div>
            </NavLink>
          </li>
        ))}
        </ul>
    </div>
  );
};
=======
  render() {
    return (
      <div>
        <ul className="flexbox-container">
          {this.state.books.map((book) => (
            <li>
              <NavLink
                to={`/Book/${book._id}`}
                style={{ textDecoration: "none" }}
              >
                <div className="book-wrapper">
                  <div className="flexbox-item flexbox-item-3">
                    <img className="fit-container" src={book.thumbnailUrl} />
                  </div>
                  {book.title}
                  <p>by {book.authors}</p>
                </div>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    );
  }
>>>>>>> 73ffc7e4095009751ddfd9e3d4aa2c6b5d2177ad
}
export default connect(null)(Home);
