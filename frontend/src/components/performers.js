import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Performer = props => (
  <tr>
    <td>{props.performer.name}</td>
    <td>{props.performer.style}</td>
  </tr>
);

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

  performerList() {
    return this.state.performers.map(function(current, i) {
      return <Performer performer={current} key={i} />;
    });
  }

  render() {
    return (
      <div>
        <h3>Performers component</h3>
        <table className="table table-striped" style={{ marginTop: 20}}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Style</th>
            </tr>
          </thead>
          <tbody>
            { this.performerList() }
          </tbody>
        </table>
      </div>
    )
  }
}