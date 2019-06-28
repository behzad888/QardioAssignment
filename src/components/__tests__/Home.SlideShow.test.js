import React from 'react';
import ReactDOM from 'react-dom';
import HomeSlideShow from '../home/slide-show';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<HomeSlideShow />, div);
  ReactDOM.unmountComponentAtNode(div);
});
