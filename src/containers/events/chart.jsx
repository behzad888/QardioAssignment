//@flow
import React, {memo} from 'react';
import {Card} from '../../components';

function EventChart(props) {
  return (
    <Card header={<span> salam </span>}>
      Chart
    </Card>
  );
}

export default memo(EventChart);
