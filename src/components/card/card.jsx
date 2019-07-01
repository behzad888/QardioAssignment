//@flow
import React, {type Element as ReactElement} from 'react';

type CardPropType = {|
  children?: ReactElement<any>,
  header?: ReactElement<any>,
  className?: string,
|};

function Card(props: CardPropType) {
  return (
    <div className={'card ' + (props.className || '')}>
      {props.header && <div className="card-header">{props.header}</div>}
      <div className="card-body">{props.children}</div>
    </div>
  );
}

export default Card;
