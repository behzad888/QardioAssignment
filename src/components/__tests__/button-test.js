//@flow
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Button from '../button/button';

const createEvent = (type, data) => {
  const event = document.createEvent('MouseEvent');
  event.initEvent(type, true, true);
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

  describe('color variants:', () => {
    it('should render red button', () => {
      wrapper = renderer
        .create(<Button label="This is a Button" color="Red" />)
        .toJSON();
      expect(wrapper).toMatchSnapshot();
    });
    it('should render gray button', () => {
      wrapper = renderer
        .create(<Button label="This is a Button" color="Gray" />)
        .toJSON();
      expect(wrapper).toMatchSnapshot();
    });

    it('should render blue button', () => {
      wrapper = renderer
        .create(<Button label="This is a Button" color="Blue" />)
        .toJSON();
      expect(wrapper).toMatchSnapshot();
    });

    it('should render white button', () => {
      wrapper = renderer
        .create(<Button label="This is a Button" color="White" />)
        .toJSON();
      expect(wrapper).toMatchSnapshot();
    });

    it('should render primary button', () => {
      wrapper = renderer
        .create(<Button label="This is a Button" color="Primary" />)
        .toJSON();
      expect(wrapper).toMatchSnapshot();
    });

    it('should render transparent button', () => {
      wrapper = renderer
        .create(<Button label="This is a Button" color="Transparent" />)
        .toJSON();
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('link component with tag a', () => {
    it('should render as an anchor with https://www.getqardio.com', () => {
      wrapper = renderer
        .create(
          <Button
            label="This is a Link"
            component="a"
            href="https://www.getqardio.com"
          />,
        )
        .toJSON();
      expect(wrapper).toMatchSnapshot();
    });
    it('should render as an anchor with href="#"', () => {
      wrapper = renderer
        .create(<Button label="This is a Link" component="a" />)
        .toJSON();
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('size variants:', () => {
    it('should render large button', () => {
      wrapper = renderer
        .create(<Button label="This is a Button" color="White" size="large" />)
        .toJSON();
      expect(wrapper).toMatchSnapshot();
    });
    it('should render medium button', () => {
      wrapper = renderer
        .create(<Button label="This is a Button" color="White" size="medium" />)
        .toJSON();
      expect(wrapper).toMatchSnapshot();
    });
    it('should render small button', () => {
      wrapper = renderer
        .create(<Button label="This is a Button" color="White" size="small" />)
        .toJSON();
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('should render ghost and round', () => {
    it('should render ghost button', () => {
      wrapper = renderer
        .create(<Button label="This is a Button" ghost />)
        .toJSON();
      expect(wrapper).toMatchSnapshot();
    });

    it('should render round button', () => {
      wrapper = renderer
        .create(<Button label="This is a Button" round />)
        .toJSON();
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('should render child', () => {
    it('should render with child node', () => {
      wrapper = renderer
        .create(
          <div>
            <Button label="This is a Button" />
            <Button>This is a Button</Button>
            <Button>
              <h2>This is a Button</h2>
            </Button>
          </div>,
        )
        .toJSON();
      expect(wrapper).toMatchSnapshot();
    });
    it('should render nested node', () => {
      wrapper = renderer
        .create(
          <div>
            <Button>
              <Button>
                <h2>This is a Button</h2>
              </Button>
            </Button>
          </div>,
        )
        .toJSON();
      expect(wrapper).toMatchSnapshot();
    });
  });
  it('should render busy with three dot', () => {
    wrapper = renderer
      .create(
        <div>
          <Button busy={true} label="This is a Button" />
          <Button busy={true}>
            <h3> This is a Button</h3>
          </Button>
        </div>,
      )
      .toJSON();
    expect(wrapper).toMatchSnapshot();
  });

  describe('Event Responder', () => {
    let onClick, ref;

    beforeEach(() => {
      onClick = jest.fn();
      ref = React.createRef();
      const element = <Button onClick={onClick} ref={ref} />;
      ReactDOM.render(element, container);
    });

    it('ignores browser emulated events', () => {
      ref.current.dispatchEvent(createEvent('click'));
      expect(onClick).toHaveBeenCalledTimes(1);
    });
  });
});
