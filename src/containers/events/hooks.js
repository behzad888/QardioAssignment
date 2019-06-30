import {useState} from 'react';

export function useDateSet() {
  const [currentDate, setCurrentDate] = useState(new Date());

  const onChangeDay = (toDate: number) => {
    //TODO: check valid date
    var now = new Date(currentDate);
    now.setDate(toDate);
    setCurrentDate(now);
  };

  return [currentDate, onChangeDay];
}
