import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import { configureStore, history } from './configure.store';
import { appReducer } from '../reducers';

const rootReducer = combineReducers({
  app: appReducer,
  router: routerReducer,
});

const store = configureStore(rootReducer, {});

export {
  history,
  store,
};
