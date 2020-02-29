import React, { Component } from 'react';
import BookList from './BookList';
import { NavLink } from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <BookList/>
        );
    }
}

export default Home;
