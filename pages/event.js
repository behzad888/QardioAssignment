import React from 'react';
import Event from '../src/containers/events/event';
import '../public/assets/theme.scss';

export default function EventPage(props) {
  return (
    <div className="root">
      <Event />
    </div>
  );
}
