//@flow
import React, {memo} from 'react';
import type {ColorType} from '../inline-typed';

type ButtonSizeType = 'large' | 'Medium' | 'Small';

type ButtonPropsType = {|
  label: string,
  ghost: boolean,
  round: boolean,
  busy: boolean,
  size: ButtonSizeType,
  color: ColorType,
  component: 'a' | 'button',
  href: string,
  onClick?: (e: Element) => void,
|};

function Button(props: ButtonPropsType) {
  let className = `btn ${props.size} btn-${props.color}`;

  if (props.ghost) {
    className += ' ghost';
  }

  if (props.round) {
    className += ' round';
  }

  const onClick = (e: Element) => {
    if (!props.busy && props.onClick) {
      props.onClick(e);
    }
  };
  switch (props.component) {
    case 'a':
      return (
        <a className={className} href={props.href}>
          {props.label}
        </a>
      );

    default:
      return (
        <button onClick={onClick} className={className}>
          {props.busy ? '...' : props.label}
        </button>
      );
  }
}

Button.defaultProps = {
  color: 'White',
  label: 'Button Text',
  size: 'large',
  ghost: false,
  round: false,
  busy: false,
  component: 'button',
  href: '#',
};

export default Button;
