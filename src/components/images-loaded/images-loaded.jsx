//@flow
import React, {Component} from 'react';
import imagesLoaded from 'imagesloaded';

function ImagesLoaded(props) {
  const imagesLoadedRefCallback = e => {
    if (e === null) {
      return;
    }
    const loaded = imagesLoaded(e);
    if (props.onFinished) {
      loaded.on('always', e => {
        if (e.isComplete) props.onFinished(e.isComplete);
      });
    }
  };

  return <div ref={imagesLoadedRefCallback}>{props.children}</div>;
}

ImagesLoaded.defaultProps = {
  className: 'images-loaded-container',
};

export default ImagesLoaded;
