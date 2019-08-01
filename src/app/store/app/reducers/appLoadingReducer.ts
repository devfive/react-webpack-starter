import { Actions, EmptyAction } from '../../Actions';
import { AppLoadedAction } from '../actions/appLoaded';
import { AppLoadingAction } from '../actions/appLoading';

export type AppLoadingReducerState = boolean;

export type AppLoadingReducerActions = AppLoadingAction
  | AppLoadedAction
  | EmptyAction;

const initialState: AppLoadingReducerState = true;

export function appLoadingReducer(
  state: AppLoadingReducerState = initialState,
  action: AppLoadingReducerActions = { type: Actions.EMPTY },
): AppLoadingReducerState {
  switch (action.type) {
    case Actions.APP_LOADED: {
      return false;
    }

    case Actions.APP_LOADING: {
      return true;
    }

    default: {
      return state;
    }
  }
}
