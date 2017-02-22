import { connect } from 'react-redux';
import { Loading } from './loading';

const mapStateToProps = (state) => {
  return {
    isLoading: state.app.isLoading,
  };
};

const LoadingContainer = connect(mapStateToProps)(Loading);

export { LoadingContainer };
