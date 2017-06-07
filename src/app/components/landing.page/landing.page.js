import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const _LandingPage = () => {
  return (
    <div>
      <Link to="/sample">Sample</Link>
    </div>
  );
};

const LandingPage = connect()(_LandingPage);

export { LandingPage };
