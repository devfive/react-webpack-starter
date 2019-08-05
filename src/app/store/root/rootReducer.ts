import { connectRouter, RouterState } from 'connected-react-router';
import { History } from 'history';
import { combineReducers, Reducer } from 'redux';
import { appReducer, AppReducerState } from '../app';

export interface RootReducerState {
  app: AppReducerState;
  router: RouterState;
}

export function getRootReducer(history: History): Reducer<RootReducerState> {
  return combineReducers({
    app: appReducer,
    router: connectRouter(history),
  });
}
