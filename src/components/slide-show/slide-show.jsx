//@flow
import React, {type Element as ReactElement} from 'react';
import Header from '../header/header';

type SlideShowProps = {|
  children: ReactElement<any>,
  className: string,
|};

function SlideShow(props: SlideShowProps) {
  return (
    <div className={'slide-show ' + props.className}>
      <div className="action">{props.children}</div>
    </div>
  );
}

SlideShow.defaultProps = {};

export default SlideShow;
