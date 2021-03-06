import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory, History } from 'history';
import { debounce } from 'lodash';
import {
  applyMiddleware,
  compose,
  createStore,
  Middleware,
  Store,
} from 'redux';
import { batchedSubscribe } from 'redux-batched-subscribe';
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxMulti from 'redux-multi';
import { createEpicMiddleware, EpicMiddleware } from 'redux-observable';
import {
  getRootReducer,
  RootActions,
  rootEpic,
  RootReducerState,
} from './root';
import { batchedSubscribeNotifier } from './utils/batchedSubscribeNotifier';
import { logger } from './utils/logger';

let composeFunction: any = compose;

const epicMiddleware: EpicMiddleware<RootActions, RootActions, RootReducerState> = createEpicMiddleware();
const history: History = createBrowserHistory();
const enhancers: any[] = [];
const middleware: Middleware[] = [
  epicMiddleware,
  reduxMulti,
  routerMiddleware(history),
];

// __DEV__ is a global defined by webpack
// when we work in __DEV__ environment
if (__DEV__) {
  middleware.push(logger);
  composeFunction = composeWithDevTools;
}

const store: Store<RootReducerState, RootActions> = createStore(
  getRootReducer(history),
  {},
  composeFunction(
    applyMiddleware(...middleware),
    ...enhancers,
    batchedSubscribe(debounce(batchedSubscribeNotifier)),
  ),
);

epicMiddleware.run(rootEpic);

export {
  store,
  history,
};
