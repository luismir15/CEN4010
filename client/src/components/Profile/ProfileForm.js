import React from 'react';
import axios from 'axios';
// import '../../pages/Register.css';

const ProfileForm = ({ user }) => {
	const handleSubmit = async (e) => {
		const loggedIn = localStorage.getItem('userId');
		console.log('number');
		await axios.put(
			`http://localhost:3002/api/users?userId=${loggedIn}`,
			input
		);
	};

	const [input, setInput] = React.useState(user);

	return (
		<div>
			<form id="update">
				<label>
					Full Name:
					<br />
					<input
						style={{ width: '100%' }}
						type="text"
						onChange={(e) => setInput({ ...input, name: e.target.value })}
						id="reg"
						name="name"
						placeholder="Jon Snow"
					/>
				</label>
				<br />
				<br />
				<label>
					Email:
					<br />
					<input
						style={{ width: '100%' }}
						type="email"
						onChange={(e) => setInput({ ...input, email: e.target.value })}
						id="reg"
						name="email"
						placeholder="jon.snow@thewall.com"
					/>
				</label>
				<br />
				<br />
				<label>
					Password:
					<br />
					<input
						style={{ width: '100%' }}
						type="password"
						onChange={(e) => setInput({ ...input, password: e.target.value })}
						id="reg"
						name="password"
						minLength="8"
					/>
				</label>
				<br />
				<br />
				<label>
					Home Address:
					<br />
					<input
						style={{ width: '100%' }}
						type="text"
						onChange={(e) =>
							setInput({ ...input, homeAddress: e.target.value })
						}
						id="reg"
						name="homeAddress"
						placeholder="1234 The Wall"
					/>
				</label>
				<br />
				<br />
				<label>
					Nickname:
					<br />
					<input
						style={{ width: '100%' }}
						type="text"
						onChange={(e) => setInput({ ...input, nickname: e.target.value })}
						id="reg"
						name="nickname"
						placeholder="Jonny"
					/>
				</label>
				<br />
				<br />
				<label>
					Credit Card 1:
					<br />
					<input
						style={{ width: '100%' }}
						type="text"
						pattern="\d*"
						onChange={(e) =>
							setInput({ ...input, creditCard1: e.target.value })
						}
						id="reg"
						class="creditCard"
						placeholder="1234123412341234"
						minlength="16"
						maxlength="16"
					/>
				</label>
				<label>
					Credit Card 1 Expiration Date:
					<br />
					<input
						style={{ width: '100%' }}
						type="month"
						min="2020-04"
						onChange={(e) =>
							setInput({ ...input, creditCard1Date: e.target.value })
						}
						id="reg"
						name="creditCardDate"
					/>
				</label>
				<br />
				<br />
				<label>
					Credit Card 2:
					<br />
					<input
						style={{ width: '100%' }}
						type="text"
						pattern="\d*"
						onChange={(e) =>
							setInput({ ...input, creditCard2: e.target.value })
						}
						id="reg"
						class="creditCard"
						placeholder="1234123412341234"
						minlength="16"
						maxlength="16"
					/>
				</label>
				<label>
					Credit Card 2 Expiration Date:
					<br />
					<input
						style={{ width: '100%' }}
						type="month"
						min="2020-04"
						onChange={(e) =>
							setInput({ ...input, creditCard2Date: e.target.value })
						}
						id="reg"
						name="creditCardDate"
					/>
				</label>
				<br />
				<br />
				<label>
					Shipping Address 1:
					<br />
					<input
						style={{ width: '100%' }}
						type="text"
						onChange={(e) =>
							setInput({ ...input, shippingAddress1: e.target.value })
						}
						id="reg"
						name="shippingAddress"
						placeholder="11200 SW 8th St"
					/>
				</label>
				<br />
				<br />
				<label>
					Shipping Address 2:
					<br />
					<input
						style={{ width: '100%' }}
						type="text"
						onChange={(e) =>
							setInput({ ...input, shippingAddress2: e.target.value })
						}
						id="reg"
						name="shippingAddress"
						placeholder="11200 SW 8th St"
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
export default ProfileForm;
