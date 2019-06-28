//@flow
import React from 'react';
import Header from '../../components/header/header';
import Masonry from '../../components/masonry/masonry';

export default function EventList(props) {
  return (
    <React.Fragment>
      <Header title="MUSEUM" backhref="/" />
      <div className="event-list">
      </div>
    </React.Fragment>
  );
}
