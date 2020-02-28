import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Register.css';

class Login extends Component {
  render() {
    return (
      <div>
        <h1 id="login">Login</h1>
        <div class='registerlink'>
          <Link to="/Register" id='registration'>Don't have an account? Register here!</Link>
        </div>
        <br />
        <form id="login">
          <label>
            Email:
          <br />
            <input
              type="email"
              id="reg"
              name="email"
              placeholder="jon.snow@thewall.com"
              required
            />
          </label>
          <br />
          <br />
          <label>
            Password:
          <br />
            <input
              type="password"
              id="reg"
              name="password"
              minLength="8"
              required
            />
          </label>
          <br />
          <br />
          <input type="submit" class="submit" value="Login" />
        </form>
      </div >
    );
  }
}

export default Login;
