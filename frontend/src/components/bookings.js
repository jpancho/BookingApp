import React, { Component } from 'react';
import axios from 'axios';

/**
 * In bookings, we are updating current performers "booked" boolean
 * from false to true. This is an example of an UPDATE.
 * We can also delete a performer.
 * This is an example of DELETE.
 */
export default class Bookings extends Component {

  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeStyle = this.onChangeStyle.bind(this);
    this.onChangePrice = this.onChangePrice.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeBooked = this.onChangeBooked.bind(this);
    this.onSubmitBooking = this.onSubmitBooking.bind(this);
    this.onSubmitDelete = this.onSubmitDelete.bind(this);

    this.state = {
      name: '',
      style: '',
      price: '',
      description: '',
      booked: false
    }
  }

  componentDidMount() {
    let performerPath = 'http://localhost:3001/performers/' + this.props.match.params.id;
    axios.get(performerPath)
      .then(res => {
        this.setState({
          name: res.data.name,
          style: res.data.style,
          price: res.data.price,
          description: res.data.description,
          booked: res.data.booked
        })
      })
      .catch(function(err) {
        console.log(err);
      });
    console.log(this.state);
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
      booked: true
    });
  }

  onSubmitBooking(e) {
    e.preventDefault();
    const performer = {
      name: this.state.name,
      style: this.state.style,
      price: this.state.price,
      description: this.state.description,
      booked: this.state.booked
    };

    let updatePath = 'http://localhost:3001/update/' + this.props.match.params.id;
    axios.post(updatePath, performer)
      .then(res => console.log(res.data));

    this.props.history.push('/performers');
  }

  onSubmitDelete(e) {
    e.preventDefault();
    let deletePath = 'http://localhost:3001/delete/' + this.props.match.params.id;
    axios.delete(deletePath)
      .then(res => console.log(res.data));

    this.props.history.push('/performers');
  }

  render() {
    return (
      <div>
        <h3>Book</h3>
        <form onSubmit={this.onSubmitBooking}>
          <input type="submit"
                 value="Book"
                 className="btn btn-primary"
                 onClick={this.onChangeBooked} />
        </form>
        <form onSubmit={this.onSubmitDelete}>
          <input type="submit"
                 value="Delete"
                 className="btn btn-danger" />
        </form>
      </div>
    )
  }
}