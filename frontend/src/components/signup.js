import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export default class Signup extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <TextField
            hintText="Enter Your Name"
            label="Full name"
          />
          <TextField
            id="outlined-email-input"
            label="Username"
            hintText="Enter Your Email"
          />
          <TextField
            id="standard-password-input"
            label="Password"
            type="password"
            hintText="Enter Your Password"
          />
          <RaisedButton
            label="Sign up"
          />
        </React.Fragment>
      </MuiThemeProvider>
    )
  }
}