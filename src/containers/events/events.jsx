//@flow
import React from 'react';
import Header from '../../components/header/header';
import Masonry from '../../components/masonry/masonry';

export default function Event(props) {
  return (
    <React.Fragment>
      <Header title="MUSEUM" backhref="/" />
      <div className="events">
      </div>
    </React.Fragment>
  );
}
