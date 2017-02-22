import { connect } from 'react-redux';
import { App } from './app';
import { appLoaded } from '../../actions';

const mapStateToProps = (state) => {
  return {
    isMenuVisible: state.app.isMenuVisible,
    isLoading: state.app.isLoading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAppLoaded: () => dispatch(appLoaded()),
  };
};

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export { AppContainer };
