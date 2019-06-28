//@flow
import React, {type Element as ReactElement} from 'react';
import './slide-show.css';

type HomeSlideShowProps = {|
  children: ReactElement<any>,
  className: string,
|};

export default function HomeSlideShow(userProps: HomeSlideShowProps) {
  const props: HomeSlideShowProps = {className: 'home-container', ...userProps};

  return <div className={props.className}>{props.children}</div>;
}
