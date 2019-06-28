import React from 'react';
import ReactDOM from 'react-dom';
import SlideShow from '../home/slide-show';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SlideShow />, div);
  ReactDOM.unmountComponentAtNode(div);
});
