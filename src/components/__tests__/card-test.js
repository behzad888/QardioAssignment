//@flow
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Card from '../card/card';

describe('while card test running in a browser environment', () => {
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
        <Card> This is a Card View </Card>
        <Card className="card-test"> This is a Card View </Card>
        <Card className="card-test">
          <div>
            This is a Cord View with Card body
            </div>
        </Card>
        <Card className="card-test" header={<span>Header</span>}>
          <div>
            This is a Cord View with Card body
            </div>
        </Card>
        </div>,
      )
      .toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});