import {
  APP_LOADING,
  APP_LOADED,
  MENU_HIDE,
  MENU_SHOW,
  MENU_TOGGLE,
} from '../constants';

const appLoading = () => {
  return {
    type: APP_LOADING,
  };
};

const appLoaded = () => {
  return {
    type: APP_LOADED,
  };
};

const hideMenu = () => {
  return {
    type: MENU_HIDE,
  };
};

const showMenu = () => {
  return {
    type: MENU_SHOW,
  };
};

const toggleMenu = () => {
  return {
    type: MENU_TOGGLE,
  };
};

export {
  appLoaded,
  appLoading,
  hideMenu,
  showMenu,
  toggleMenu,
};
