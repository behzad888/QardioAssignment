//@flow
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import ImagesLoaded from '../images-loaded/images-loaded';

describe('while images loaded test running in a browser environment', () => {
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
          <ImagesLoaded>
            <img src="https://www.getqardio.com/wp-content/uploads/2019/05/19_14_General_Summer_WD_HP_EN.jpg" />
            <img src="https://www.getqardio.com/wp-content/uploads/2019/05/19_14_General_Summer_WD_HP_EN.jpg" />
            <img src="https://www.getqardio.com/wp-content/uploads/2019/05/19_14_General_Summer_WD_HP_EN.jpg" />
            <img src="https://www.getqardio.com/wp-content/uploads/2019/05/19_14_General_Summer_WD_HP_EN.jpg" />
            <img src="https://www.getqardio.com/wp-content/uploads/2019/05/19_14_General_Summer_WD_HP_EN.jpg" />
          </ImagesLoaded>
        </div>,
      )
      .toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});
