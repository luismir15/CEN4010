import React from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import Books from '../components/Browsing/Books';
import '../components/Browsing/Browsing.css';


class TopSel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      books: []
    };
  }

	componentDidMount() {
		axios.get('http://localhost:3002/api/books').then(res => {
			this.setState({
				books: res.data
			});
		});
	}

render(){
  return(
    <div>
          <div className="Broswing">
            <Books/>
          </div>
          <ul className="flexbox-container">
          {this.state.books.slice(15,24).map((book)=>(
            <li>
              <NavLink to={`/Book/${book._id}`} style={{ textDecoration: 'none' }}>
                              <div className="book-wrapper">
                                  <div className="flexbox-item flexbox-item-3">
                                    <img className="fit-container" src={book.thumbnailUrl}/>
                                  </div>
                                  <h3>{book.title}</h3>
                                  <p>by {book.authors}</p>
                                  <p>Genre: {book.genre}</p>
                                  <p>Price: {book.price}</p>
                                  <p>Raiting: {book.rating}</p>
                                  <p>Published: {book.publishedDate}</p>
                              </div>
              </NavLink>
            </li>
          ))}
          </ul>
    </div>
  );
};
}

export default TopSel;
