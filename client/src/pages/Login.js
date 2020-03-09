import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import './Register.css';
import axios from 'axios';
import * as tokenService from '../services/token';

const Login = () => {
  // Set the states to empty before the user fills them out
  const [authenticated, setAuthenticated] = React.useState(false);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  // Checks the data against the database to see if the user exists
  // If they do, log them in
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data: { token } } = await axios.post('/api/auth/', { email, password });
    tokenService.store(token);
    setAuthenticated(true);
  }

  return authenticated ? <Redirect to="/" /> : (
    <div>
      <h1 id="login">Login</h1>
      <div class='registerlink'>
        <Link to="/Register" id='registration'>Don't have an account? Register here!</Link>
      </div>
      <br />
      <form id="login">
        <label class='label'>
          Email:
          <br />
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            id="reg"
            name="email"
            placeholder="jon.snow@thewall.com"
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
            onChange={(e) => setPassword(e.target.value)}
            id="reg"
            name="password"
            minLength="8"
            required
          />
        </label>
        <br />
        <br />
        <input type="submit" onClick={handleSubmit} class="submit" value="Login" />
      </form>
    </div >
  );
}

export default Login;
