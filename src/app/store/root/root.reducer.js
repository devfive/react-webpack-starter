import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import { appReducer } from '../app';

function getRootReducer(history) {
  return combineReducers({
    app: appReducer,
    router: connectRouter(history),
  });
}

export { getRootReducer };
