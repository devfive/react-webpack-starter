import * as React from 'react';
import * as classnames from 'classnames';

export interface Props {
  isLoading:boolean;
}

function Loading({ isLoading }:Props):JSX.Element {
  const classes:string = classnames({
    'loading-indicator': true,
    'loading-indicator--hidden': !isLoading,
  });

  return (
    <div className={ classes }>
      <div className="loading-indicator__text">Ładowanie...</div>
    </div>
  );
};

export { Loading };
