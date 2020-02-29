import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.css';

class Login extends Component {
  render() {
    return (
      <div>
        <h2 id="login">Sign in</h2>

        <div class='registerlink'>
          <Link to="./Register" id='registration'>Don't have an account? Register here!</Link>
        </div>
        <br />

        <form id="login">
          <label class='label'>
            Email:
          <br />
            <input
              type="email"
              id="reg"
              name="email"
              placeholder="Email Address*"
              required
            />
          </label>
          <br />
          <br />
          <label class='label'>
            Password:
          <br />
            <input
              type="password"
              id="reg"
              name="password"
              placeholder="Password*"
              minLength="8"
              required
            />
          </label>
          <br />
          <br />
          <div class='registerlink'>
          <Link to="./Register" id='registration'>Don't have an account? Register here!</Link>
        </div>
        <br />

          <input type="submit" class="submit" value="Login" />
        </form>
      </div >
    );
  }
}

export default Login;