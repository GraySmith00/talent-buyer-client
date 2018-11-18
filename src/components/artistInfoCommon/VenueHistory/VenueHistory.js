import React, { Component } from 'react';
import { getEventHistory } from '../../../Utils/songKickApiCalls';

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
    let displayHistory;

    if (localEventHistory.events && localEventHistory.events.length) {
      displayHistory = localEventHistory.events.map((event, i) => (
        <div className="table-row" key={`${event.id}-${i}`}>
          <h4 className="event-details">{event.date}</h4>
          <h4 className="event-details"> {event.venue.displayName}</h4>
          <h4 className="event-details"> {event.billing}</h4>
        </div>
      ));
    }

    return (
      <div className="past-events">
        <div className="watchlist">
          <h3>
            Latest Appearances In
            <span className="city-header">{localEventHistory.venueCity}</span>
          </h3>
          <div className="recent-table-headings">
            <h4 className="event-header">Date</h4>
            <h4 className="event-header">Venue</h4>
            <h4 className="event-header">Billing</h4>
          </div>
          <div className="event-container">{displayHistory}</div>
        </div>
      </div>
    );
  }
}

export default VenueHistory;
