import React, { Component } from 'react';
import { auth } from '../helpers/auth';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

function setErrorMsg(error) {
  return {
    registerError: error.message
  };
}

export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      registerError: null,
      fullName: '',
      email: '',
      password: ''
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    auth(this.state.email, this.state.password)
      .catch(e => this.setState(setErrorMsg(e))
    );
  };

  render() {
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <form onSubmit={this.handleSubmit}>
            <h3>Register</h3>
            <TextField
              hintText="Enter Your Name"
              label="Full name"
              onChange={(event, newValue) => this.setState({ fullName: newValue})}
            />
            <TextField
              id="outlined-email-input"
              label="Username"
              hintText="Enter Your Email"
              onChange={(event, newValue) => this.setState({ email: newValue})}
            />
            <TextField
              id="standard-password-input"
              label="Password"
              type="password"
              hintText="Enter Your Password"
              onChange={(event, newValue) => this.setState({ password: newValue})}
            />
            <RaisedButton
              label="Sign up"
              type="submit"
            />
          </form>
        </React.Fragment>
      </MuiThemeProvider>
    )
  }
}