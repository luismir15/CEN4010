import React from 'react';
import './index.css';
import Home from './Home';
import Register from './Register';
import Login from './Login';
import Orders from './Orders';
import BookDetails from './BookDetails';
import ShopCart from './ShopCart';
import { Route, HashRouter, NavLink } from 'react-router-dom';


// NPM RUN CLIENT is the updated src folder, (NPM RUN SERVER/NPM START) runs build in my case which is the old green template
//Use ctrL + C to stop the server
//Always run NPM INSTALL on a newly cloned file
//Do not push updates to master branch, push to your own branch PLZ

//updated file structure on my branch (miguel) 2/17/20
//npm install after downloading/ npm install --save react-bootstrap mighe be needed for BookDetails to work
//npm npm run client to run this package

function App() {
  return (
    <HashRouter>

      <div>

        {/* Link TITLE with home Page*/}
        <NavLink to="/" style={{ textDecoration: 'none' }}>
          <h1><i class="material-icons">menu_book</i> GeekText</h1>
        </NavLink>

        {/* styles this section with css*/}
        <ul className="header">

          <li><NavLink exact to="/">Home</NavLink></li>

          {/* search bar*/}
          <input type="text" />
          <button type="submit">Submit</button>

          {/* search bar with database integration built*/}
          {/* <input onchange={this.props.handleSearch} type="text"/>
          <button type="submit">Submit</button> */}

          <li><NavLink to="/Register">Register</NavLink></li>
          <li><NavLink to="/Login">Login</NavLink></li>
          <li><NavLink to="/Orders">Orders</NavLink></li>
          <li><NavLink to="/BookDetails">Book Details</NavLink></li>


          <li>
            <NavLink to="/ShopCart">
              <i class="material-icons md-dark md-24">shopping_cart</i>
            </NavLink>
          </li>

        </ul>

        {/* styles this section with css*/}
        <div className="content">

          <Route exact path="/" component={Home} />
          <Route path="/Register" component={Register} />
          <Route path="/Login" component={Login} />
          <Route path="/Orders" component={Orders} />
          <Route path="/BookDetails" component={BookDetails} />
          <Route path="/ShopCart" component={ShopCart} />

        </div>
      </div>

    </HashRouter>

  );
}

export default App;
