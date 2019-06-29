//@flow
import React, {memo, useState} from 'react';
import {Card} from '../../components';

function EventList(props) {
    const [data, setData] = useState([1,2,3,4,5,6,7,8,9,4,5,6,4,5,6,8]);

    debugger
  return (
    <Card header={<span> salam </span>}>
        <div className="list">

      {data.map((item,index)=>{
          return( 
              <div key={index} className="list-item">
        <span> salam</span>
        </div>)
      })
    }
    </div>
    </Card>
  );
}
export default memo(EventList);
