//@flow
import React, {memo} from 'react';
import {Card} from '../../components';

function EventChart(props) {
  return (
    <Card footer={<span> salam </span>} header={<span> salam </span>}>
      Chart
    </Card>
  );
}

export default memo(EventChart);
