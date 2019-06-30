//@flow
import React from 'react';
import {Header, Masonry} from '../../components';

export default function Collection(props) {
  const data = [
    {
      title: 'salam',
      imageUrl:
        'https://structuretone.com/wp-content/uploads/2014/01/Rodin-Museum-6-resize.jpg',
    },
    {
      title: 'Hi',
      imageUrl:
        'https://washington-org.s3.amazonaws.com/s3fs-public/children-viewing-henry-the-elephant-at-natural-history-museum_credit-department-of-state-iip-photo-archive.jpg',
    },
    {
      title: 'salam',
      imageUrl:
        'https://structuretone.com/wp-content/uploads/2014/01/Rodin-Museum-6-resize.jpg',
    },
    {
      title: 'salam',
      imageUrl:
        'https://structuretone.com/wp-content/uploads/2014/01/Rodin-Museum-6-resize.jpg',
    },
    {
      title: 'Hi',
      imageUrl: 'https://media.timeout.com/images/105246805/630/472/image.jpg',
    },
    {
      title: 'salam',
      imageUrl:
        'https://structuretone.com/wp-content/uploads/2014/01/Rodin-Museum-6-resize.jpg',
    },
    {
      title: 'salam',
      imageUrl:
        'https://structuretone.com/wp-content/uploads/2014/01/Rodin-Museum-6-resize.jpg',
    },
    {
      title: 'salam',
      imageUrl:
        'https://structuretone.com/wp-content/uploads/2014/01/Rodin-Museum-6-resize.jpg',
    },
    {
      title: 'salam',
      imageUrl:
        'https://structuretone.com/wp-content/uploads/2014/01/Rodin-Museum-6-resize.jpg',
    },
  ];
  return (
    <React.Fragment>
      <Header title="MUSEUM" backhref="/" />
      <div className="collection">
        <Masonry >
        {data.map((item, index) => {
        return (
          <div className="child-item" key={index}>
            <img src={item.imageUrl} alt={item.title} />
            <span className="title">{item.title}</span>
            <span className="author">{item.author}</span>
          </div>
        );
      })}
          </Masonry>
      </div>
    </React.Fragment>
  );
}
