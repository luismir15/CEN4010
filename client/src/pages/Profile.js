import React from 'react';
import axios from 'axios';
import './Profile.css';

const DEFAULT = 'DEFAULT';
const ERROR = 'ERROR';
const AUTHED = 'AUTHED';
const UPDATE = 'UPDATE';

const Profile = () => {
	const [state, setState] = React.useState(DEFAULT);
	const [user, setUser] = React.useState({
		creditCards: null,
		shippingAddresses: null,
		name: null,
		email: null,
		userId: null,
		password: null,
		homeAddress: null,
		nickname: null
	});

	// fetches the user information from localstorage using the stored userID
	React.useEffect(() => {
		const fetchUserData = async () => {
			try {
				const loggedIn = localStorage.getItem('userId');
				const {
					data: { user: fetchedUser }
				} = await axios.get(
					`http://localhost:3002/api/users?userId=${loggedIn}`
				);
				if (fetchedUser) {
					setUser(fetchedUser);
					setState(AUTHED);
				} else {
					setState(ERROR);
				}
			} catch (e) {
				setState(ERROR);
			}
		};
		fetchUserData();
	}, []);

	switch (state) {
		case DEFAULT:
			return (
				<div>
					<h1>You are not signed in</h1>
				</div>
			);
		case AUTHED:
			return <AuthedProfile user={user} />;
		case UPDATE:
			return <ProfileForm user={user} />;
		case ERROR:
			return (
				<div>
					<h1>You are not signed in</h1>
				</div>
			);
		default:
			return (
				<div>
					<h1>You are not signed in</h1>
				</div>
			);
	}
};

// logout button: clears token and userID from localstorage and refreshes window, logging the user out
const logout = async e => {
	localStorage.removeItem('token');
	localStorage.removeItem('userId');
	window.location.reload();
};

// renders the user profile
const AuthedProfile = ({ user }) => (
	<div>
		<input type="submit" onClick={logout} class="submit" value="Logout" />
		<input type="submit" class="submit" value="Update" />
		<h1>Name</h1>
		<h3>{user?.name}</h3>
		<h1>User ID</h1>
		<h3>{user?.userId}</h3>
		<h1>Email</h1>
		<h3>{user?.email}</h3>
		<h1>Home Address</h1>
		<h3>{user?.homeAddress}</h3>
		<h1>Nickname</h1>
		<h3>{user?.nickname}</h3>
	</div>
);

const ProfileForm = ({ user }) => {
	const handleSubmit = async e => {
		const loggedIn = localStorage.getItem('userId');
		axios.put(`http://localhost:3002/api/users?userId=${loggedIn}`, input);
	};

	const [input, setInput] = React.useState(user);

	return (
		<div>
			<form id="update">
				<label>
					Full Name:
					<br />
					<input
						type="text"
						onChange={e => setInput({ ...input, name: e.target.value })}
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
						onChange={e => setInput({ ...input, email: e.target.value })}
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
						onChange={e => setInput({ ...input, password: e.target.value })}
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
						onChange={e => setInput({ ...input, homeAddress: e.target.value })}
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
						onChange={e => setInput({ ...input, nickname: e.target.value })}
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
					value="Confirm"
				/>
			</form>
		</div>
	);
};

export default Profile;
