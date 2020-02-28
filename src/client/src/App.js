import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<Router>
					<div className="App"></div>
				</Router>
			</Provider>
		);
	}
}
export default App;
