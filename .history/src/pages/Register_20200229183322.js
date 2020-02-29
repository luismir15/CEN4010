import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.css';

//regis
class Register extends Component {
  render() {
    return (
      <div>
        <h1 id="registration">Register Here</h1>
        <div class='loginlink'>
          <Link to="/Login" id='registration'>Already registered? Login here!</Link>
        </div>
        <br />
        <form id="registration">
          <label>
            First Name:
						<br />
            <input
              type="text"
              id="reg"
              name="firstname"
              placeholder="Jon"
              required
            />
          </label>
          <br />
          <br />
          <label>
            Last Name:
						<br />
            <input
              type="text"
              id="reg"
              name="lastname"
              placeholder="Snow"
              required
            />
          </label>
          <br />
          <br />
          <label>
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
          <label>
            Confirm Password:
						<br />
            <input type="password" id="reg" name="password" required />
          </label>
          <br />
          <br />
          <input type="submit" class="submit" value="Register" />
        </form>
      </div >
    );
  }
}

export default Register;