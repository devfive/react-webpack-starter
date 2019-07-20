import { connect } from 'react-redux';

import { appLoading } from '../../store/app';
import { App } from './app';

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
