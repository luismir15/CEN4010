import React from 'react';

import EditCreditCardModal from './EditCreditCardModal';

const DEFAULT = 'DEFAULT';
const SHOWING_CREDIT_CARD_MODAL = 'SHOWING_CREDIT_CARD_MODAL';

const AuthedProfile = ({ user, onClickUpdate, creditCards }) => {
	const [profileState, setProfileState] = React.useState(DEFAULT);
	const [editingCreditCard, setEditingCreditCard] = React.useState(null);

	const logout = async (e) => {
		localStorage.removeItem('token');
		localStorage.removeItem('userId');
		window.location.reload();
	};

	const onClickAddCreditCard = () => {
		setProfileState(SHOWING_CREDIT_CARD_MODAL);
	};

	return (
		<div>
			<input type="submit" onClick={logout} class="submit" value="Logout" />
			<input
				type="submit"
				onClick={onClickUpdate}
				class="submit"
				value="Update"
			/>

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
			<h1>Credit Card 1</h1>
			<h3>
				Card Number: {user?.creditCard1} - Expires on: {user?.creditCard1Date}
			</h3>
			<h1>Credit Card 2</h1>
			<h3>
				Card Number: {user?.creditCard2} - Expires on: {user?.creditCard2Date}
			</h3>
			<h1>Shipping Address 1</h1>
			<h3>{user?.shippingAddress1}</h3>
			<h1>Shipping Address 2</h1>
			<h3>{user?.shippingAddress2}</h3>
		</div>
	);
};

export default AuthedProfile;
