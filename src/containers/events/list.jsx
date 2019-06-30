//@flow
import React, {memo, useState, useEffect} from 'react';
import {Card, NavigationDate} from '../../components';

function EventList(props) {
  const [data, setData] = useState([]);
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(async () => {
    const data = await (await fetch(
      `https://www.rijksmuseum.nl/api/en/agenda/2020-03-31?key=fpGQTuED&format=json`
    )).json();

    setData(
      data.options.map(c => {
        return {
          title: c.exposition.name,
          period: c.period.text,
          language: c.lang,
          appropriateFor: c.expositionType.friendlyName,
          availablePalce: c.period.remaining + ' of ' + c.period.maximum,
        };
      })
    );

    return data;
  }, [currentDate]);
  return (
    <Card header={<NavigationDate title={currentDate.toDateString()} />}>
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
