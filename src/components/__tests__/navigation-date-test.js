//@flow
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NavigationDate from '../navigation-date/navigation-date';

Enzyme.configure({adapter: new Adapter()});

describe('while navigation date test running in a browser environment', () => {
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
          <NavigationDate />
          <NavigationDate className="navigation-date-test" />
          <NavigationDate
            className="navigation-date-test"
            title={new Date().toDateString()}
          />
          <NavigationDate isBusy={true} />
        </div>,
      )
      .toJSON();
    expect(wrapper).toMatchSnapshot();
  });

  describe('Event Responder', () => {
    it('onPrevClick', () => {
      const onNextClick = jest.fn();
      const wrapper = shallow(<NavigationDate onNextClick={onNextClick} />);
      wrapper.find('.next').simulate('click');
      expect(onNextClick).toHaveBeenCalledTimes(1);
    });
    it('onNextClick', () => {
      const onPrevClick = jest.fn();
      const wrapper = shallow(<NavigationDate onPrevClick={onPrevClick} />);
      wrapper.find('.prev').simulate('click');
      expect(onPrevClick).toHaveBeenCalledTimes(1);
    });
  });
});
