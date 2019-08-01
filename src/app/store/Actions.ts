export interface BaseAction<T> {
  type: T;
}

export enum Actions {
  APP_LOADED = '@app/APP_LOADED',
  APP_LOADING = '@app/APP_LOADING',
  APP_MENU_HIDE = '@app/APP_MENU_HIDE',
  APP_MENU_SHOW = '@app/APP_MENU_SHOW',
  APP_MENU_TOGGLE = '@app/APP_MENU_TOGGLE',
  EMPTY = '',
}

export type EmptyAction = BaseAction<Actions.EMPTY>;
