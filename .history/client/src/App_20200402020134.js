import React from 'react';
import './index.css';
import Home from './pages/Home';
import Register from './pages/Register';


import Library from './pages/Library';
import WishList from './pages/WishList';


import Login from './pages/Login';
import BookDetails from './pages/BookDetails';

import Profile from './pages/Profile';
import Help from './pages/Help';
import ShopCart from './pages/ShopCart';

import { Route, HashRouter, NavLink } from 'react-router-dom';

// NPM RUN CLIENT is the updated src folder, (NPM RUN SERVER/NPM START) runs build in my case which is the old green template
//Use ctrL + C to stop the server
//Always run NPM INSTALL on a newly cloned file
//Do not push updates to master branch, push to your own branch PLZ

//updated file structure on my branch (miguel) 2/17/20
//npm install after downloading/ npm install --save react-bootstrap mighe be needed for BookDetails to work
// npm install react-router-dom --save to fix initial error
//npm npm run client to run this package

const App = () => (
	<HashRouter>
		<div>
			{/* Link TITLE with home Page*/}
			<NavLink to="/" style={{ textDecoration: 'none' }}>
				<h1>
					<i class="material-icons">menu_book</i> GeekText
				</h1>
			</NavLink>

			{/* styles this section with css*/}
			<ul className="header">
				<li>
					<NavLink exact to="/">
						Home
					</NavLink>
				</li>

				{/* search bar*/}
				<input type="text" />
				<button type="submit">Submit</button>

				{/* search bar with database integration built*/}
				{/* <input onchange={this.props.handleSearch} type="text"/>
         		 <button type="submit">Submit</button> */}


 				<li><NavLink to="/Library">Library</NavLink></li>


          		<li><NavLink to="/WishList">Wish List</NavLink></li>
		  		{/* <li><NavLink to="/BookDetails">Book Details</NavLink></li> */}

          		<li><NavLink to="/Login">Login</NavLink></li>
		  		<li><NavLink to="/Profile">Profile</NavLink></li>
				<li><NavLink to="/Help">Help</NavLink></li>

				<li>
					<NavLink to="/ShopCart">
						<i class="material-icons md-dark md-24">shopping_cart</i>
					</NavLink>
				</li>
			</ul>

			{/* styles this section with css*/}
			<div className="content">
				<Route exact path="/" component={Home} />
				<Route path="/Library" component={Library} />
				<Route path="/WishList" component={WishList} />
				<Route path="/Book/:id" component={BookDetails} />
				<Route path="/Register" component={Register} />
				<Route path="/Login" component={Login} />
				<Route path="/Profile" component={Profile} />
				<Route path="/Help" component={Help} />
				<Route path="/ShopCart" component={ShopCart} />

				
			</div>
		</div>
	</HashRouter>
);

export default App;
