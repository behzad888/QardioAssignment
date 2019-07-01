//@flow
import React, {useState, useEffect} from 'react';
import {
  Header,
  Masonry,
  Button,
  ImagesLoaded,
  type EnvType,
} from '../../components';

export default function Collection() {
  const [query, setQuery] = useState('');
  const [busy, setBusy] = useState(false);
  const [queryValue, setQueryValue] = useState('');
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setBusy(true);
      const env: EnvType = process.env;
      fetch(
        `${env.NEXT_STATIC_API_URL}collection?q=${query}&key=${env.NEXT_STATIC_API_KEY}&format=json`
      ).then(res => {
        setBusy(false);
        res.json().then(result => {
          setData(
            result.artObjects
              .filter(c => c.showImage)
              .map(c => {
                let titles = c.longTitle.split(',');
                return {
                  title: titles[0],
                  description: titles[1] + ' ' + titles[2],
                  //To load image with perfect resolution for this component
                  //I just replace 's' variable by 736
                  imageUrl: c.webImage.url.replace('=s0', '=s736'),
                };
              })
          );
        });
      });
    };

    fetchData();
  }, [query]);

  return (
    <React.Fragment>
      <Header title="MUSEUM" backhref="/" />
      <div className="collection">
        <div className="search">
          <input
            type="text"
            placeholder="Search..."
            value={queryValue}
            onChange={e => setQueryValue(e.target.value)}
          />
          <Button
            busy={busy}
            color="Primary"
            size="Medium"
            label="Search"
            onClick={e => setQuery(queryValue)}
          />
        </div>
        <Masonry size>
          {data.map((item, index) => {
            return (
              <div className="child-item" key={index}>
                <img src={item.imageUrl} alt={item.title} />
                <div className="information">
                  <span className="title">{item.title}</span>
                  <span className="description">{item.description}</span>
                </div>
              </div>
            );
          })}
        </Masonry>
      </div>
    </React.Fragment>
  );
}
