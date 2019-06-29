//@flow
import React, {memo, useState} from 'react';
import {Card, NavigationDate} from '../../components';

function EventList(props) {
  const [data, setData] = useState([
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    4,
    5,
    6,
    4,
    5,
    6,
    8,
  ]);
  const [currentDate, setCurrentDate] = useState(new Date());
  return (
    <Card header={<NavigationDate title={currentDate.toDateString()} />}>
      <div className="list">
        {data.map((item, index) => {
          return (
            <div key={index} className="list-item">
              <span> salam</span>
            </div>
          );
        })}
      </div>
    </Card>
  );
}
export default memo(EventList);
