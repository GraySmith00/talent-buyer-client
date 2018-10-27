import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import './Dashboard.css';

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <Nav />
        <h1>Dashboard</h1>
      </div>
    );
  }
}

export default Dashboard;
