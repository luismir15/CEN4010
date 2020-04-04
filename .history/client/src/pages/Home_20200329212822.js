import React from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

class Home extends React.Component {
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

	render() {
		return (
			<div>
				<ul className="flexbox-container">
					{this.state.books.map(book => (
						<li>
							<NavLink
								to={`/Book/${book._id}`}
								style={{ textDecoration: 'none' }}
							>
								<div className="book-wrapper">
									<div className="flexbox-item flexbox-item-3">
										<img className="fit-container" src={book.thumbnailUrl} />
									</div>
									<h4>{book.title}</h4>
								</div>
							</NavLink>
						</li>
					))}
				</ul>
			</div>
		);
	}
}

export default Home;