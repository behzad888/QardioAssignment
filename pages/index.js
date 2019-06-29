import React from 'react';
import Home from '../src/containers/home/home';
import '../public/assets/home.scss';

export default function MainPage(props) {
  return (
    <div className="root">
      <Home />
    </div>
  );
}
