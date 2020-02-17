import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD:client/src/index.js
import './index.css';
import Main from './main';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Main />, document.getElementById('root'));
=======
import './pages/index.css';
import App from './pages/App';
import * as serviceWorker from './pages/serviceWorker';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
>>>>>>> 9a31c37c83634afc4fabc6d566d6df818fd033f9:src/index.js

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
