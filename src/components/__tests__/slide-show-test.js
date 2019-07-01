//@flow
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import SlideShow from '../slide-show/slide-show';

describe('while slide show test running in a browser environment', () => {
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
          <SlideShow>
            <div className="content">
              <div className="home-holder"></div>
            </div>
          </SlideShow>
        </div>,
      )
      .toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});
