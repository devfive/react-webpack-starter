import { AppLoadedAction } from './actions/appLoaded';
import { AppLoadingAction } from './actions/appLoading';
import { AppMenuHideAction } from './actions/appMenuHide';
import { AppMenuShowAction } from './actions/appMenuShow';
import { AppMenuToggleAction } from './actions/appMenuToggle';

export type AppActions = AppLoadedAction
  | AppLoadingAction
  | AppMenuHideAction
  | AppMenuShowAction
  | AppMenuToggleAction;

export * from './actions/appLoaded';
export * from './actions/appLoading';
export * from './actions/appMenuHide';
export * from './actions/appMenuShow';
export * from './actions/appMenuToggle';
