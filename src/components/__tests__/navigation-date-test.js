//@flow
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import NavigationDate from '../navigation-date/navigation-date';

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
        <NavigationDate  className="navigation-date-test" />
        <NavigationDate   className="navigation-date-test" title={new Date().toDateString()}/>
        <NavigationDate   isBusy={true}/>
        </div>,
      )
      .toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});