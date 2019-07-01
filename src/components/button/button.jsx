//@flow
import React, {memo, forwardRef, type Element as ReactElement} from 'react';
import type {ColorType} from '../inline-typed';

type ButtonSizeType = 'large' | 'medium' | 'small';

type ButtonPropsType = {|
  label: string,
  ghost?: boolean,
  round?: boolean,
  busy?: boolean,
  size: ButtonSizeType,
  color?: ColorType,
  component?: 'a' | 'button',
  href?: string,
  className?: string,
  children?: ReactElement<any>,
  forwardedRef?: {current: HTMLButtonElement | HTMLAnchorElement | null},
  onClick?: (e: Element) => void,
|};

function Button(props: ButtonPropsType) {
  let className = `btn ${props.size} btn-${props.color || ''}`;

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
        <a ref={props.forwardedRef} className={className + ' ' + (props.className || '')} href={props.href}>
          {props.label}
        </a>
      );

    default:
      return (
        <button
          ref={props.forwardedRef}
          onClick={onClick}
          className={className}>
          {props.busy ? '...' : props.children || props.label}
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

export default forwardRef<
  ButtonPropsType,
  HTMLAnchorElement | HTMLButtonElement | null
>((props, ref: any) => {
  return <Button {...props} forwardedRef={ref} />;
});
