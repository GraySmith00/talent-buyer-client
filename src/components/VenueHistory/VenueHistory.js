import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { getEventHistory } from '../../Utils/songKickApiCalls';

import './VenueHistory.css';

class VenueHistory extends Component {
  state = {
    localEventHistory: []
  };

  async componentDidMount() {
    const { artist, currentVenue } = this.props;
    const localEventHistory = await getEventHistory(
      artist.songkick_id,
      currentVenue,
      artist.name
    );
    this.setState({ localEventHistory });
  }

  render() {
    const { localEventHistory } = this.state;
    const { artist } = this.props;

    let displayHistory;

    if (localEventHistory.events && localEventHistory.events.length) {
      displayHistory = (
        <Fragment>
          <h3>
            Latest appearances in:
            <span className="city"> {localEventHistory.venueCity}</span>
          </h3>
          <div className="table-headings">
            <h4 className="event-header">Date</h4>
            <h4 className="event-header">Venue</h4>
            <h4 className="event-header">Billing</h4>
          </div>
          <div className="event-container">
            {localEventHistory.events.map((event, i) => (
              <div className="table-row" key={`${event.id}-${i}`}>
                <h4 className="event-details">{event.date}</h4>
                <h4 className="event-details"> {event.venue.displayName}</h4>
                <h4 className="event-details"> {event.billing}</h4>
              </div>
            ))}
          </div>
        </Fragment>
      );
    } else {
      displayHistory = (
        <h3>* {artist.name} has not played any recent shows in your area.</h3>
      );
    }

    return <div className="venue-history">{displayHistory}</div>;
  }
}

VenueHistory.propTypes = {
  artist: PropTypes.object.isRequired
};

export default VenueHistory;
