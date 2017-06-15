import { combineReducers } from 'redux';
import {
  APP_LOADING,
  APP_LOADED,
  MENU_HIDE,
  MENU_SHOW,
  MENU_TOGGLE,
} from './app.constants';

const menuVisibleReducer = (state = true, action = { type: '' }) => {
  switch (action.type) {
    case MENU_HIDE:
      return false;

    case MENU_SHOW:
      return true;

    case MENU_TOGGLE:
      return !state;

    default:
      return state;
  }
};

const loadingReducer = (state = true, action = { type: '' }) => {
  switch (action.type) {
    case APP_LOADING:
      return true;

    case APP_LOADED:
      return false;

    default:
      return state;
  }
};

const appReducer = combineReducers({
  isMenuVisible: menuVisibleReducer,
  isLoading: loadingReducer,
});

export { appReducer };
