import React, { Component } from "react";

class Main extends Component {
    render() {
        return (
            <div>
                <h1>GeekText</h1>
                <ul className="header">
                    <li><a href="/">Home</a></li>
                    <li><a href="/">Search</a></li>
                    <li><a href="/">Profile</a></li>
                    <li><a href="/">Shopping Cart</a></li>
                    <li><a href="/">Wish List</a></li>
                    <li><a href="/">Register/Login</a></li>
                </ul>
                <div className="content">

                </div>
            </div>
        );
    }
}

export default Main;