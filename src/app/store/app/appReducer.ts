import { combineReducers, Reducer } from 'redux';
import {
  appLoadingReducer,
  AppLoadingReducerActions,
  AppLoadingReducerState,
} from './reducers/appLoadingReducer';
import {
  menuVisibleReducer,
  MenuVisibleReducerActions,
  MenuVisibleReducerState,
} from './reducers/menuVisibleReducer';

export interface AppReducerState {
  isLoading: AppLoadingReducerState;
  isMenuVisible: MenuVisibleReducerState;
}

type AppReducerActions = AppLoadingReducerActions | MenuVisibleReducerActions;

export const appReducer: Reducer<AppReducerState, AppReducerActions> = combineReducers({
  isLoading: appLoadingReducer,
  isMenuVisible: menuVisibleReducer,
});
