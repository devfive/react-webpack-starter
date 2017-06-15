import { applyMiddleware, compose, createStore } from 'redux';
import multi from 'redux-multi';
import { batchedSubscribe } from 'redux-batched-subscribe';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware } from 'react-router-redux';
import { createEpicMiddleware } from 'redux-observable';
import debounce from 'lodash.debounce';
import createHistory from 'history/createBrowserHistory';

import {
  rootEpic,
  rootReducer,
} from './root';
import { logger } from './logger';

let composeFunction = compose;

const epicMiddleware = createEpicMiddleware(rootEpic);
const history = createHistory();
const enhancers = [];
const middleware = [
  epicMiddleware,
  multi,
  routerMiddleware(history),
];

// __DEV__ is a global defined by webpack
// when we work in __DEV__ environment
if (__DEV__) {
  middleware.push(logger);
  composeFunction = composeWithDevTools;
}

const store = createStore(
  rootReducer,
  {},
  composeFunction(
    applyMiddleware(...middleware),
    ...enhancers,
    batchedSubscribe(debounce((notify) => {
      if (__DEV__) {
        console.log('------------');
      }

      notify();
    }))
  )
);

export {
  store,
  history,
};
