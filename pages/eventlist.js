import React from 'react';
import EventList from '../src/containers/events/eventlist';
import '../public/assets/theme.scss';

export default function EventListPage(props) {
  return (
    <div className="root">
      <EventList />
    </div>
  );
}
