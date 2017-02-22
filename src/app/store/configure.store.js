import { applyMiddleware, compose, createStore } from 'redux';
import multi from 'redux-multi';
import thunk from 'redux-thunk';
import { batchedSubscribe } from 'redux-batched-subscribe';
import debounce from 'lodash.debounce';
import { logger } from './logger';
import { composeWithDevTools } from 'redux-devtools-extension';

let middleware = [thunk, multi];
let composeFunction = compose;

// __DEV__ is a global defined by webpack
// when we work in __DEV__ environment
if (__DEV__) {
  middleware.push(logger);
  composeFunction = composeWithDevTools;
}

function configureStore(rootReducer, initialState = {}, storeMiddleware = [], enhancers = []) {
  middleware = [...middleware, ...storeMiddleware];

  return createStore(
    rootReducer,
    initialState,
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
}

export { configureStore };
