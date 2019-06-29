//@flow
import React, {memo} from 'react';
import {Card} from '../../components';

function EventList(props) {
  return (
    <Card footer={<span> salam </span>} header={<span> salam </span>}>
      List
    </Card>
  );
}
export default memo(EventList);
