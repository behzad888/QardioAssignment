//@flow
import React from 'react';
import {Header} from '../../components';
import EventList from './list';
import EventChart from './chart';

export default function Event(props) {
  return (
    <React.Fragment>
      <Header title="MUSEUM" backhref="/" />
      <div className="events">
        <EventList />
        <EventChart />
      </div>
    </React.Fragment>
  );
}
