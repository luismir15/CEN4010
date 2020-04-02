import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import './Register.css';
import axios from 'axios';
import * as tokenService from '../services/token';

const Login = () => {
	// Set the states to empty before the user fills them out
	const [authenticated, setAuthenticated] = React.useState(false);
	const [userId, setUserId] = React.useState('');
	const [password, setPassword] = React.useState('');

	// Checks the data against the database to see if the user exists
	// If they do, log them in
	const handleSubmit = async e => {
		e.preventDefault();
		const { data: { token } } = await axios.post('/api/auth/', { userId, password });
		tokenService.store(token);
		localStorage.setItem('userId', userId);
		setAuthenticated(true);
	};

	return authenticated ? <Redirect to="/Profile" /> : (
		<div>
			<h2 id="login">Sign in</h2>
			<br />
			<form id="login">
				<label class="label">
					User ID:
					<br />
					<input
						type="text"
						onChange={e => setUserId(e.target.value)}
						id="reg"
						name="userid"
						placeholder="ID: Email Address"
						required
					/>
				</label>
				<br />
				<br />
				<label class="label">
					Password:
					<br />
					<input
						type="password"
						onChange={e => setPassword(e.target.value)}
						id="reg"
						name="password"
						placeholder="Password"
						minLength="8"
						required
					/>
				</label>
				<br />
				<br />
				<div class="registerlink">
				<Link to="/Register" id="registration">
						Don't have an account? Sign Up
				</Link>
				</div>

				<input
					type="submit"
					onClick={handleSubmit}
					class="submit"
					value="  Sign in   "
				/>
			</form>
		</div>
	);
};

export default Login;
