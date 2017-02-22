import React, { PropTypes } from 'react';
import classnames from 'classnames';

const Loading = ({ isLoading }) => {
  const classes = classnames({
    'loading-indicator': true,
    'loading-indicator--hidden': !isLoading,
  });

  return (
    <div className={ classes }>
      <div className="loading-indicator__text">Ładowanie...</div>
    </div>
  );
};

Loading.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};

export { Loading };
