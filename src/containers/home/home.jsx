//@flow
import React from 'react';

import SlideShow from '../../components/slide-show/slide-show';
import Header from '../../components/header/header';
import Button from '../../components/button/button';

export default function Home(props) {
  return (
    <React.Fragment>
      <Header title="MUSEUM" />
      <SlideShow>
        <div className="content">
          <div className="home-holder">
            <h1 className="title">Welcome to the Museum</h1>
            <Button
              label="View Events"
              ghost
              round
              component="a"
              href="/eventlist"
            />
            <Button
              label="View Collection"
              ghost
              round
              component="a"
              href="/collection"
            />
          </div>
        </div>
      </SlideShow>
    </React.Fragment>
  );
}
