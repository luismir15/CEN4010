import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import axios from 'axios';
import * as tokenService from './services/token';

axios.defaults.baseURL = 'http://localhost:3002'

axios.interceptors.request.use((config) => ({
    ...config,
    headers: {
        ...config.headers,
        'x-auth-token': tokenService.get()
    }
}))

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
