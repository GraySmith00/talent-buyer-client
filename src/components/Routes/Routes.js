import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Landing from '../Landing/Landing';
import Dashboard from '../Dashboard/Dashboard';
import ArtistIndex from '../ArtistIndex/ArtistIndex';
import ArtistShow from '../ArtistShow/ArtistShow';
import OfferTemplate from '../OfferTemplate/OfferTemplate';

class Routes extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Route exact path="/" component={Landing} />
          <Route exact path="/home" component={Dashboard} />
          <Route exact path="/artists" component={ArtistIndex} />
          <Route exact path="/artist" component={ArtistShow} />
          <Route exact path="/template" component={OfferTemplate} />
        </Fragment>
      </Router>
    );
  }
}

export default Routes;
