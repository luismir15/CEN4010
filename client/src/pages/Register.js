import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import './Register.css';
import axios from 'axios';
import * as tokenService from '../services/token';

const Register = () => {
	// Set the states to empty before user fills them out
	const [authenticated, setAuthenticated] = React.useState(false);
	const [name, setName] = React.useState('');
	const [email, setEmail] = React.useState('');
	const [userId, setUserId] = React.useState('');
	const [password, setPassword] = React.useState('');
	const [homeAddress, setAddress] = React.useState('');
	const [nickname, setNickname] = React.useState('');

	// Puts all the data of the user into the database
	const handleSubmit = async e => {
		console.log('1');
		e.preventDefault();
		console.log('2');
		try {
			const {
				data: { token }
			} = await axios.post('/api/users/', {
				name,
				email,
				userId,
				password,
				homeAddress,
				nickname
			});
			console.log('3');
			tokenService.store(token);
			console.log('4');
			localStorage.setItem('userId', userId);
			console.log('5');
			setAuthenticated(true);
			console.log('6');
		} catch (e) {
			console.log(e);
		}
	};

	return authenticated ? (
		<Redirect to="/Profile" />
	) : (
		<div>
			<h1 id="registration">Register Here</h1>
			<div class="loginlink">
				<Link to="/Login" id="registration">
					Already registered? Login here!
				</Link>
			</div>
			<br />
			<form id="registration">
				<label>
					Full Name:
					<br />
					<input
						type="text"
						onChange={e => setName(e.target.value)}
						id="reg"
						name="name"
						placeholder="Jon Snow"
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
						onChange={e => setEmail(e.target.value)}
						id="reg"
						name="email"
						placeholder="jon.snow@thewall.com"
						required
					/>
				</label>
				<br />
				<br />
				<label>
					User ID:
					<br />
					<input
						type="text"
						onChange={e => setUserId(e.target.value)}
						id="reg"
						name="userid"
						placeholder="jon123"
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
						onChange={e => setPassword(e.target.value)}
						id="reg"
						name="password"
						minLength="8"
						required
					/>
				</label>
				<br />
				<br />
				<label>
					Home Address:
					<br />
					<input
						type="text"
						onChange={e => setAddress(e.target.value)}
						id="reg"
						name="homeAddress"
						placeholder="1234 The Wall"
						required
					/>
				</label>
				<br />
				<br />
				<label>
					Nickname:
					<br />
					<input
						type="text"
						onChange={e => setNickname(e.target.value)}
						id="reg"
						name="nickname"
						placeholder="Jonny"
						required
					/>
				</label>
				<br />
				<br />
				<input
					type="submit"
					onClick={handleSubmit}
					class="submit"
					value="Register"
				/>
			</form>
		</div>
	);
};

export default Register;