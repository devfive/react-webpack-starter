import * as React from 'react';
import { connect } from 'react-redux';
import { Loading } from './loading';

const mapStateToProps: any = (state: any) => {
  return {
    isLoading: state.app.isLoading,
  };
};

const LoadingContainer: React.Component = connect(mapStateToProps)(Loading);

export { LoadingContainer };
