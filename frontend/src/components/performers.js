import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Performer = props => (
  <tr>
    <td>{props.performer.name}</td>
    <td>{props.performer.style}</td>
    <td>{props.performer.price}</td>
    <td>{props.performer.description}</td>
    <td>{String(props.performer.booked)}</td>
    <td>
      <Link to={"/bookings/" + props.performer._id}>Book</Link>
    </td>
    <td>
      <Link to={"/bookings/" + props.performer._id}>Remove</Link>
    </td>
  </tr>
);

/**
 * In performers, we are listing out all of the performers in our database.
 * This is an example of GET.
 * We are also able to individually get performers.
 * This is an example of GET with an id.
 */
export default class Performers
  extends Component {

  constructor(props) {
    super(props);
    this.state = {performers: []};
  }

  componentDidMount() {
    let performerPath = 'http://localhost:3001/performers';
    axios.get(performerPath)
      .then(res => {
        this.setState({performers: res.data});
      })
      .catch(function(err) {
        console.log(err);
      })
  }

  componentDidUpdate() {
    let performerPath = 'http://localhost:3001/performers';
    axios.get(performerPath)
      .then(res => {
        this.setState({performers: res.data});
      })
      .catch(function(err) {
        console.log(err);
      })
  }

  performerList() {
    return this.state.performers.map(function(current, i) {
      return (
        <Performer performer={current} key={i}/>
      )
    });
  }

  render() {
    return (
      <div>
        <h3>Performers</h3>
        <table className="table" style={{ marginTop: 20}}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Style</th>
              <th>Price</th>
              <th>Description</th>
              <th>Booked</th>
              <th>Book?</th>
              <th>Admin Remove</th>
            </tr>
          </thead>
          <tbody>
            {this.performerList()}
          </tbody>
        </table>
      </div>
    )
  }
}