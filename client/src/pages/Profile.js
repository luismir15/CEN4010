import './Profile.css';

import React from 'react';
import axios from 'axios';

import AuthedProfile from '../components/Profile/AuthedProfile';
import ProfileForm from '../components/Profile/ProfileForm';

const DEFAULT = 'DEFAULT';
const ERROR = 'ERROR';
const AUTHED = 'AUTHED';
const UPDATE = 'UPDATE';

const Profile = () => {
	const [state, setState] = React.useState(DEFAULT);
	const [creditCards, setCreditCards] = React.useState([]);
	const [user, setUser] = React.useState({
		creditCard1: null,
		creditCard1Date: null,
		creditCard2: null,
		creditCard2Date: null,
		shippingAddress1: null,
		shippingAddress2: null,
		name: null,
		email: null,
		userId: null,
		password: null,
		homeAddress: null,
		nickname: null,
	});

	const onClickUpdate = () => setState(UPDATE);

	// fetches the user information from localstorage using the stored userID
	React.useEffect(() => {
		const fetchUserData = async () => {
			try {
				const loggedIn = localStorage.getItem('userId');

				const [
					{
						data: { user: fetchedUser },
					},
					{
						data: { creditCards: fetchedCreditCards },
					},
				] = await Promise.all([
					axios.get(`http://localhost:3002/api/users?userId=${loggedIn}`),
					axios.get(`http://localhost:3002/api/creditCards?userId=${loggedIn}`),
				]);

				if (fetchedUser && fetchedCreditCards) {
					setUser(fetchedUser);
					setCreditCards(fetchedCreditCards);
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
			return (
				<AuthedProfile
					onClickUpdate={onClickUpdate}
					user={user}
					creditCards={creditCards}
				/>
			);
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

export default Profile;
