import React from 'react';
import { connect } from 'react-redux';

const _SamplePage = () => {
  return (
    <div>SamplePage</div>
  );
};

const SamplePage = connect()(_SamplePage);

export { SamplePage };
