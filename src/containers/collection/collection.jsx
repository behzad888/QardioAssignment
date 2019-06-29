//@flow
import React from 'react';
import {Header, Masonry} from '../../components';

export default function Collection(props) {
  return (
    <React.Fragment>
      <Header title="MUSEUM" backhref="/" />
      <div className="collection">
        <Masonry />
      </div>
    </React.Fragment>
  );
}
