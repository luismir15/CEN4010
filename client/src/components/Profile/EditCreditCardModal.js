import React from 'react';
import axios from 'axios';
import Modal from 'react-modal';

const EditCreditCardModal = ({ creditCard }) => {
	const customStyles = {
		content: {
			top: '50%',
			left: '50%',
			right: 'auto',
			bottom: 'auto',
			marginRight: '-50%',
			transform: 'translate(-50%, -50%)',
		},
	};

	var subtitle;
	const [modalIsOpen, setIsOpen] = React.useState(false);

	function openModal() {
		setIsOpen(true);
	}

	function afterOpenModal() {
		// references are now sync'd and can be accessed.
		subtitle.style.color = '#f00';
	}

	function closeModal() {
		setIsOpen(false);
	}

	const [creditCardInput, setCreditCardInput] = React.useState(
		creditCard ?? {
			number: '',
			expirationDate: '',
			ccv: '',
		}
	);
	const [disabled, setDisabled] = React.useState(true);

	React.useEffect(() => {
		const { number, expirationDate, ccv } = creditCardInput;

		if (typeof Number(number) === 'number' && typeof Number(ccv) === 'number') {
			setDisabled(false);
		}
	}, [creditCardInput]);

	const onSubmit = async () => {
		// await axios.put('localhost:.../creditCards', {creditCard, userId: id (from localStorage)});
		//refresh
		const userId = localStorage.getItem('userId');
		await axios.put('http://localhost:3002/api/creditCards', {
			creditCard,
			userId,
		});
		window.location.reload();
	};

	return (
		<>
			<input
				name="number"
				onChange={(e) =>
					setCreditCardInput({ ...creditCardInput, number: e.target.value })
				}
			/>
			<input
				name="expirationDate"
				onChange={(e) =>
					setCreditCardInput({
						...creditCardInput,
						expirationDate: e.target.value,
					})
				}
			/>
			<input
				name="ccv"
				onChange={(e) =>
					setCreditCardInput({ ...creditCardInput, ccv: e.target.value })
				}
			/>
			<input
				disabled={disabled}
				type="submit"
				onClick={onSubmit}
				class="submit"
				value="Submit"
			/>
		</>
	);
};

export default EditCreditCardModal;
