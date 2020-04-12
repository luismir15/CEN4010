import { createStore, compose, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from './reducers';
const store = createStore(
	reducers,
	compose(
		applyMiddleware(reduxThunk)

		//remove the line below if store is giving an error
	)
);

export default store;
