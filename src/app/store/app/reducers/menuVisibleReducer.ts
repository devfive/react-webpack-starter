import { Actions, EmptyAction } from '../../Actions';
import { AppMenuHideAction } from '../actions/appMenuHide';
import { AppMenuShowAction } from '../actions/appMenuShow';
import { AppMenuToggleAction } from '../actions/appMenuToggle';

export type MenuVisibleReducerState = boolean;

export type MenuVisibleReducerActions = AppMenuHideAction
  | AppMenuShowAction
  | AppMenuToggleAction
  | EmptyAction;

const initialState: MenuVisibleReducerState = false;

export function menuVisibleReducer(
  state: MenuVisibleReducerState = initialState,
  action: MenuVisibleReducerActions = { type: Actions.EMPTY },
): MenuVisibleReducerState {
  switch (action.type) {
    case Actions.APP_MENU_HIDE: {
      return false;
    }

    case Actions.APP_MENU_SHOW: {
      return true;
    }

    case Actions.APP_MENU_TOGGLE: {
      return !state;
    }

    default: {
      return state;
    }
  }
}
