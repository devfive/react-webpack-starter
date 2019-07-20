import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory, History } from 'history';
import { debounce } from 'lodash';
import {
  applyMiddleware,
  compose,
  createStore,
  Middleware,
} from 'redux';
import { batchedSubscribe } from 'redux-batched-subscribe';
import { composeWithDevTools } from 'redux-devtools-extension';
import * as multi from 'redux-multi';
import { createEpicMiddleware } from 'redux-observable';

import { logger } from './logger';
import {
  rootEpic,
  getRootReducer,
} from './root';

let composeFunction:any = compose;

const epicMiddleware:any = createEpicMiddleware();
const history:History = createBrowserHistory();
const enhancers:any[] = [];
const middleware:Middleware[] = [
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
  getRootReducer(history),
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

epicMiddleware.run(rootEpic);

export {
  store,
  history,
};
