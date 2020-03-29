import React from 'react';
import './index.css';
import './style/browsing.css';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Orders from './pages/Orders';
import BookDetails from './pages/BookDetails';
import ShopCart from './pages/ShopCart';
import Profile from './pages/Profile';
//import Books from './component/Books';
import { Route, HashRouter, NavLink } from 'react-router-dom';


// NPM RUN CLIENT is the updated src folder, (NPM RUN SERVER/NPM START) runs build in my case which is the old green template
//Use ctrL + C to stop the server
//Always run NPM INSTALL on a newly cloned file
//Do not push updates to master branch, push to your own branch PLZ

//updated file structure on my branch (miguel) 2/17/20
//npm install after downloading/ npm install --save react-bootstrap mighe be needed for BookDetails to work
//npm npm run client to run this package

const App = () => (
  <div>
    <HashRouter>
      <div>
        <NavLink to="/" style={{ textDecoration: 'none' }}>
          <h1><i class="material-icons">menu_book</i> GeekText</h1>
        </NavLink>
        <ul className="header">
          <li><NavLink exact to="/">Home</NavLink></li>
          <li><NavLink to="/Login">Login</NavLink></li>
          <li><NavLink to="/Orders">Orders</NavLink></li>
          <li><NavLink to="/BookDetails">Book Details</NavLink></li>
          <li><NavLink to="/Profile">Profile</NavLink></li>
          <li>
            <NavLink to="/ShopCart">
              <i class="material-icons md-dark md-24">shopping_cart</i>
            </NavLink>
          </li>
        </ul>
        <div className="content">
          <Route exact path="/" component={Home} />
          <Route path="/Register" component={Register} />
          <Route path="/Login" component={Login} />
          <Route path="/Orders" component={Orders} />
          <Route path="/BookDetails" component={BookDetails} />
          <Route path="/ShopCart" component={ShopCart} />
          <Route path="/Profile" component={Profile} />
        </div>
      </div>
    </HashRouter>
  </div>

);

export default App;
