//@flow
import React from 'react';
import Header from '../../components/header/header';
import Masonry from '../../components/masonry/masonry';

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
