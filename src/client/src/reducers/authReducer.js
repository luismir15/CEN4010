import {
	USER_LOADED,
	USER_LOADING,
	AUTH_ERROR,
	LOGIN_SUCCESS,
	LOGIN_FAIL,
	LOGOUT_SUCCESS,
	REGISTER_SUCCESS,
	REGISTER_FAIL
} from '../actions/types';

// initial state for user
const initState = {
	token: localStorage.getItem('token'),
	isAuthenticated: null,
	isLoading: false,
	user: null
};

export default function(state = initState, action) {
	switch (action.type) {
		// get user from backend to point where we fetch user
		case USER_LOADING:
			return {
				...state,
				isLoading: true
			};
		// user is now loaded
		// runs with every request to see if we are logged in
		case USER_LOADED:
			return {
				...state,
				isAuthenticated: true,
				isLoading: false,
				user: action.payload
			};
		// on login
		case LOGIN_SUCCESS:
		case REGISTER_SUCCESS:
			return {
				...state,
				// user and token from backend
				...action.payload,
				isAuthenticated: true,
				isLoading: false
			};
		// user logs out, login fail, register fail, or authentication error
		// sets state back to initial state if there is no authenticated token
		case AUTH_ERROR:
		case LOGIN_FAIL:
		case LOGOUT_SUCCESS:
		case REGISTER_FAIL:
			return {
				...state,
				token: null,
				user: null,
				isAuthenticated: false,
				isLoading: false
			};
		default:
			return state;
	}
}
