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
        </div>,
      )
      .toJSON();
    expect(wrapper).toMatchSnapshot();
  });

  it('should render header', () => {
    wrapper = renderer
      .create(
        <div>
          <Card header={<span>Header</span>}> This is a Card View </Card>
        </div>,
      )
      .toJSON();
    expect(wrapper).toMatchSnapshot();
  });
  it('should render body', () => {
    wrapper = renderer
      .create(
        <div>
          <Card>
            <div>This is Body</div>
          </Card>
        </div>,
      )
      .toJSON();
    expect(wrapper).toMatchSnapshot();
  });
  it('should render with custom className', () => {
    wrapper = renderer
      .create(
        <div>
          <Card className="card-test-class-name">
            <div>This is Body</div>
          </Card>
        </div>,
      )
      .toJSON();
    expect(wrapper).toMatchSnapshot();
  });
  it('should render nested card', () => {
    wrapper = renderer
      .create(
        <div>
          <Card className="card-test-parent">
            <div>
              <Card className="card-test-child">
                <Card className="card-test-inner-child">
                  <div>This is Body</div>
                </Card>
              </Card>
            </div>
          </Card>
        </div>,
      )
      .toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});
