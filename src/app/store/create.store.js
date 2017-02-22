import { combineReducers } from 'redux';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

import { configureStore } from './configure.store';
import { appReducer } from '../reducers';

const rootReducer = combineReducers({
  app: appReducer,
  routing: routerReducer,
});

const store = configureStore(rootReducer, {});
const history = syncHistoryWithStore(browserHistory, store);

export {
  history,
  store,
};
