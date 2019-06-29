import React from 'react';
import Events from '../src/containers/events/events';
import '../public/assets/theme.scss';

export default function EventsPage(props) {
  return (
    <div className="root">
      <Events />
    </div>
  );
}
