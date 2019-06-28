//@flow
import React, {type Element as ReactElement, memo} from 'react';

type HeaderPropsType = {|
  children: ReactElement<any>,
  className: string,
  title: string,
  backhref: string,
|};

function Header(props: HeaderPropsType) {
  return (
    <div {...props}>
      {props.backhref && (
        <a className="back" title="back" href={props.backhref}>
          {' '}
          &#8249;{' '}
        </a>
      )}
      <h2>{props.title}</h2>
      {props.children}
    </div>
  );
}

Header.defaultProps = {
  className: 'header',
  backhref: null,
};

export default memo(Header);
