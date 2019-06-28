//@flow
import React, {type Element as ReactElement} from 'react';
import Header from '../header/header';

type SlideShowProps = {|
  children: ReactElement<any>,
  className: string,
|};

export default function SlideShow(userProps: SlideShowProps) {
  const props: SlideShowProps = {className: 'slide-show', ...userProps};

  return (
    <div className={props.className}>
      <div className="action">{props.children}</div>
    </div>
  );
}
