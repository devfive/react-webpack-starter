import * as React from 'react';
import { connect } from 'react-redux';

import { appLoading } from '../../store/app';
import { App } from './App';

const mapStateToProps: any = (state: any) => {
  return {
    isLoading: state.app.isLoading,
    isMenuVisible: state.app.isMenuVisible,
  };
};

const mapDispatchToProps: any = (dispatch: any) => {
  return {
    appLoading: () => dispatch(appLoading()),
  };
};

const AppContainer: React.Component = connect(mapStateToProps, mapDispatchToProps)(App);

export { AppContainer };
