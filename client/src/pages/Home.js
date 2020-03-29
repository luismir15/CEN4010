import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../style/browsing.css';
import Books from '../component/Books';

const Home = () => {
    return (
        <div>
            <ul className="flexbox-container">
                <div className="browsing">
                    <Books/>
                </div>
            </ul>
        </div>
    );
}

export default Home;
