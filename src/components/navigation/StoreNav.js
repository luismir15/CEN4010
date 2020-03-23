import React from 'react';
import { NavLink } from 'react-router-dom';


class StoreNav extends React.Component {

render() {
  return (
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
          </div>
);
}
}

export default StoreNav;
