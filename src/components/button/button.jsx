//@flow
import React, {memo} from 'react';
import type {ColorType} from '../inline-typed';

type ButtonSizeType = 'large' | 'Medium' | 'Small';

type ButtonPropsType = {|
  label: string,
  ghost: boolean,
  round: boolean,
  size: ButtonSizeType,
  color: ColorType,
  component: 'a' | 'button',
  href: string,
|};

function Button(props: ButtonPropsType) {
  let className = `btn ${props.size} btn-${props.color}`;

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
  size: 'Large',
  ghost: false,
  round: false,
  component: 'button',
  href: '#',
};

export default Button;
