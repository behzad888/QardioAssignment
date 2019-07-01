//@flow
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Button from '../button/button';


const createEvent = (type, data) => {
  const event = document.createEvent('CustomEvent');
  event.initCustomEvent(type, true, true);
  if (data != null) {
    Object.entries(data).forEach(([key, value]) => {
      event[key] = value;
    });
  }
  return event;
};

describe('while button tests running in a browser environment', () => {
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
          <Button label="This is a Button"/>          
          <Button label="This is a Button" size="large"/>          
          <Button label="This is a Button" ghost size="large"/>          
          <Button label="This is a Button" ghost round size="large"/>                
          <Button label="This is a Button" ghost round size="small"/>          
          <Button label="This is a Button" ghost round size="small"/>          
          <Button label="This is a Button" ghost round size="large" busy={true}/>          
          <Button label="This is a Button" ghost round size="large" color="Red"/>          
          <Button label="This is a Link Button" ghost round size="large" component="a" href="https://www.getqardio.com/"/>          
        </div>,
      )
      .toJSON();
    expect(wrapper).toMatchSnapshot();
  });


  describe('onClick', () => {
    let onClick, ref;

    beforeEach(() => {
      onClick = jest.fn();
      ref = React.createRef();
      const element = (
        <Button onClick={onClick} ref={ref} />
      );
      ReactDOM.render(element, container);
    });

      it('ignores browser emulated events', () => {
        debugger
      ref.current.dispatchEvent(createEvent('pointerdown'));
      ref.current.dispatchEvent(createEvent('touchstart'));
      ref.current.dispatchEvent(createEvent('mousedown'));
      expect(onClick).toHaveBeenCalledTimes(1);
    });

  })
});