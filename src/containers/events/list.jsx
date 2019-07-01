//@flow
import React, {memo, useState, useEffect} from 'react';
import {Card, NavigationDate} from '../../components';
import {useDateSet} from './hooks';

function EventList(props) {
  const [data, setData] = useState([]);
  const [isBusy, setIsBusy] = useState(false);
  const [currentDate, onChangeDay] = useDateSet();

  useEffect(() => {
    const fetchData = async () => {
      const date = [
        currentDate.getFullYear(),
        currentDate.getMonth(),
        currentDate.getDate(),
      ].join('-');
      setIsBusy(true);

      fetch(
        `${process.env.NEXT_STATIC_API_URL}agenda/${date}?key=${process.env.NEXT_STATIC_API_KEY}&format=json`
      ).then(res => {
        setIsBusy(false);
        res
          .json()
          .then(data => {
            setData(
              data.options.map(c => {
                return {
                  title: c.exposition.name,
                  period: c.period.text,
                  language: c.lang,
                  appropriateFor: c.expositionType.friendlyName,
                  availablePalce:
                    c.period.remaining + ' of ' + c.period.maximum,
                };
              })
            );
          })
          .catch(err => {
            //TODO: ex handler
            setData([]);
          });
      });
    };
    fetchData();
  }, [currentDate]);

  return (
    <Card
      header={
        <NavigationDate
          isBusy={isBusy}
          onNextClick={() => onChangeDay(currentDate.getDate() + 1)}
          onPrevClick={() => onChangeDay(currentDate.getDate() - 1)}
          title={currentDate.toDateString()}
        />
      }>
      <div className="list">
        {data.map((item, index) => {
          return (
            <div key={index} className="list-item">
              <span className="time"> {item.period}</span>
              <div className="information">
                <h3 className="title"> {item.title}</h3>
                <div className="additional-info">
                  <div>
                    <span>Palces Available:</span>
                    <span>{item.availablePalce}</span>
                  </div>
                  <div>
                    <span>Appropriate For:</span>
                    <span>{item.appropriateFor}</span>
                  </div>
                  <div>
                    <span>Language:</span>
                    <span>{item.language}</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
}
export default memo(EventList);
