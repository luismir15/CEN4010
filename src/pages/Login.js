import React, { Component } from 'react';

class Login extends Component {
  render() {
    return (
      <div>
        <h1>Login</h1>

        <p>This will be the user login page <span role="img"> 😍</span> :P</p>
        <li>Can be merged with register/ sign up</li>

        <ol>
          <input onchange={this.props.handleSearch} type="text" />
          <form onSubmit={this.props.searchBook} action="">

            <input onchange={this.props.handleSearch} type="text" />
            <button type="submit">Submit</button>
          </form>
        </ol>

      </div>
    );
  }
}

export default Login;
