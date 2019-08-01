import { appMenuHide, AppMenuHideAction } from '../../actions/appMenuHide';
import { appMenuShow, AppMenuShowAction } from '../../actions/appMenuShow';
import { appMenuToggle, AppMenuToggleAction } from '../../actions/appMenuToggle';
import { menuVisibleReducer, MenuVisibleReducerState } from '../menuVisibleReducer';

describe('menuVisibleReducer', () => {
  describe('@app/MENU_HIDE_ACTION', () => {
    it('should change state accordingly', () => {
      // having
      const initialState: MenuVisibleReducerState = true;
      const action: AppMenuHideAction = appMenuHide();

      // when
      // then
      expect(menuVisibleReducer(initialState, action)).toEqual(false);
    });
  });

  describe('@app/MENU_SHOW_ACTION', () => {
    it('should change state accordingly', () => {
      // having
      const initialState: MenuVisibleReducerState = false;
      const action: AppMenuShowAction = appMenuShow();

      // when
      // then
      expect(menuVisibleReducer(initialState, action)).toEqual(true);
    });
  });

  describe('@app/MENU_TOGGLE_ACTION', () => {
    // having
    let state: MenuVisibleReducerState = false;
    const action: AppMenuToggleAction = appMenuToggle();

    it('should change state accordingly', () => {
      // when
      state = menuVisibleReducer(state, action);

      // then
      expect(state).toEqual(true);
    });

    it('should toggle the state', () => {
      // when
      state = menuVisibleReducer(state, action);

      // when
      expect(state).toEqual(false);
    });
  });
});
