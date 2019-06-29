//@flow
import React from 'react';
import Button from '../button/button';

type NavigationDatePropType = {|
  className: string,
  title: string,
  onPrevClick: e => void,
  onNextClick: e => void,
|};

function NavigationDate(props: NavigationDatePropType) {
  return (
    <div className={'navigation-date ' + props.className}>
      <span className="title">{props.title}</span>
      <Button
        label="<"
        onPrevClick={props.onPrevClick}
        round
        ghost
        size="Small"
      />
      <Button
        label=">"
        onNextClick={props.onNextClick}
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
