//@flow
import React from 'react';
import {Header, Card} from '../../components';

export default function Event(props) {
  return (
    <React.Fragment>
      <Header title="MUSEUM" backhref="/" />
      <div className="events">
        <Card 
        footer={(<span> salam </span>)}
        header={(<span> salam </span>)}>
          salam
          </Card>
        <Card>
          salam2
          </Card>
      </div>
    </React.Fragment>
  );
}
