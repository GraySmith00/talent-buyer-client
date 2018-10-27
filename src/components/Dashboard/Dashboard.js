import React, { Component } from 'react';
import Calendar from 'react-calendar';
import Nav from '../Nav/Nav';
import './Dashboard.css';

class Dashboard extends Component {
  state = {
    date: new Date()
  };

  handleDateChange = date => this.setState({ date });

  render() {
    return (
      <div className="dashboard">
        <Nav />
        <Calendar onChange={this.handleDateChange} value={this.state.date} />
      </div>
    );
  }
}

export default Dashboard;
