import React, { Component } from 'react';
import axios from 'axios';

/**
 * In home, we have a form that takes in input to add a performer
 * to our database. This is an example of POST.
 */
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
    };

    let addPath = 'http://localhost:3001/add';
    axios.post(addPath, newPerformer)
      .then(res => console.log(res.data));

    this.setState({
      name: '',
      style: '',
      price: '',
      description: '',
      booked: false
    });

    this.props.history.push('/performers');
  }

  render() {
    return (
      <div style={{marginTop: 15}}>
        <h3>Add Performer</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Name: </label>
            <input type="text"
                   className="form-control"
                   value={this.state.name}
                   onChange={this.onChangeName}
            />
          </div>
          <div className="form-group">
            <label>Style: </label>
            <input type="text"
                   className="form-control"
                   value={this.state.style}
                   onChange={this.onChangeStyle}
            />
          </div>
          <div className="form-group">
            <label>Price: </label>
            <input type="text"
                   className="form-control"
                   value={this.state.price}
                   onChange={this.onChangePrice}
            />
          </div>
          <div className="form-group">
            <label>Description: </label>
            <input type="text"
                   className="form-control"
                   value={this.state.description}
                   onChange={this.onChangeDescription}
            />
          </div>
          <div className="form-group">
            <input type="submit"
                   value="Add Performer"
                   className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    )
  }
}