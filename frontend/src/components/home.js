import React, { Component } from 'react';
import axios from 'axios';

export default class Home extends Component {

  constructor(props) {
    super(props);

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeStyle = this.onChangeStyle.bind(this);
    this.onChangePrice = this.onChangePrice.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeBooked = this.onChangeBooked.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: '',
      style: '',
      price: '',
      description: '',
      booked: false
    }
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value
    });
  }

  onChangeStyle(e) {
    this.setState({
      style: e.target.value
    });
  }

  onChangePrice(e) {
    this.setState({
      price: e.target.value
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    });
  }

  onChangeBooked(e) {
    this.setState({
      booked: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const newPerformer = {
      name: this.state.name,
      style: this.state.style,
      price: this.state.price,
      description: this.state.description,
      booked: this.state.booked
    }
  }

  render() {
    return (
      <h3>Home component</h3>
    )
  }
}