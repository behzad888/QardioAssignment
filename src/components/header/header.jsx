//@flow
import React, {type Element as ReactElement} from 'react';

type HeaderPropsType = {|
  children: ReactElement<any>,
  className: string,
  title: string,
|};

export default function Header(userProps: HeaderPropsType) {
  const props: HeaderPropsType = {className: 'header', ...userProps};

  return (
    <div {...props}>
      <h2>{props.title}</h2>
      {props.children}
    </div>
  );
}
