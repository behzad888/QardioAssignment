import React from 'react';
import Home from '../src/containers/home/home';
import '../public/assets/theme.scss';

export default function MainPage(props) {
  return (
    <div className="root">
      <Home />
    </div>
  );
}
