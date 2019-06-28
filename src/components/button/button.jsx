//@flow
import React, {memo} from 'react';
import type {ColorType} from '../inline-typed';

type ButtonPropsType = {|
  label: string,
  ghost: boolean,
  round: boolean,
  color: ColorType,
  component: 'a' | 'button',
  href: string,
|};

function Button(props: ButtonPropsType) {
  let className = `btn btn-${props.color}`;

  if (props.ghost) {
    className += ' ghost';
  }
  if (props.round) {
    className += ' round';
  }

  switch (props.component) {
    case 'a':
      return (
        <a className={className} href={props.href}>
          {props.label}
        </a>
      );

    default:
      return <button className={className}>{props.label}</button>;
      break;
  }
}

Button.defaultProps = {
  color: 'White',
  label: 'Button Text',
  ghost: false,
  round: false,
  component: 'button',
  href: '#',
};
export default memo(Button);
