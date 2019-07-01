//@flow
import React from 'react';
import Button from '../button/button';

type NavigationDatePropType = {|
  className: string,
  title: string,
  isBusy: boolean,
  onPrevClick: (e: EventTarget) => void,
  onNextClick: (e: EventTarget) => void,
|};

function NavigationDate(props: NavigationDatePropType) {
  return (
    <div className={'navigation-date ' + props.className}>
      <span className="title">{props.title}</span>
      <Button
        busy={props.isBusy}
        label="<"
        onClick={props.onPrevClick}
        round
        ghost
        size="Small"
      />
      <Button
        busy={props.isBusy}
        label=">"
        onClick={props.onNextClick}
        round
        ghost
        size="Small"
      />
    </div>
  );
}

NavigationDate.defaultProps = {
  className: '',
  title: new Date().toDateString(),
};

export default NavigationDate;
