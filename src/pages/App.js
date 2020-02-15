import React from 'react';
import logo from './logo.svg';
import './index.css';
import Home from './home';
import Register from './register';
import Login from './login';
import BookDetails from './BookDetails';
import { Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/details" component={BookDetails} />
    </div>
  );
}

export default App;
