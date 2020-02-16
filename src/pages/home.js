import React from 'react';
import { Link } from 'react-router-dom';

function home() {
  return (
    <div className="home">
      <h1>GeekText</h1>
      <ul className="header">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <a href="/">Search</a>
        </li>
        <li>
          <a href="/">Profile</a>
        </li>
        <li>
          <a href="/">Shopping Cart</a>
        </li>
        <li>
          <a href="/">Wish List</a>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
      <div className="content"></div>
    </div>
  );
}

export default home;
