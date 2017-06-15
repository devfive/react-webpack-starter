import { connect } from 'react-redux';

import { App } from './app';
import { appLoading } from '../../store/app';

const mapStateToProps = (state) => {
  return {
    isMenuVisible: state.app.isMenuVisible,
    isLoading: state.app.isLoading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    appLoading: () => dispatch(appLoading()),
  };
};

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export { AppContainer };
