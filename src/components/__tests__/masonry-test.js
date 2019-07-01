//@flow
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Masonry from '../masonry/masonry';

describe('while masonry test running in a browser environment', () => {
  let container, wrapper;

  beforeEach(() => {
    jest.resetModules();

    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    ReactDOM.render(null, container);
    document.body.removeChild(container);
    container = null;
  });

  it('should render correctly', () => {
    wrapper = renderer
      .create(
        <div>
          <Masonry>
            <div className="child-item-1"></div>
            <div className="child-item-2"></div>
            <div className="child-item-3"></div>
            <div className="child-item-4"></div>
          </Masonry>
        </div>,
      )
      .toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});
