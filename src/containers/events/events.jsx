//@flow
import React from 'react';
import {Header, Card} from '../../components';

export default function Event(props) {
  return (
    <React.Fragment>
      <Header title="MUSEUM" backhref="/" />
      <div className="events"></div>
    </React.Fragment>
  );
}
