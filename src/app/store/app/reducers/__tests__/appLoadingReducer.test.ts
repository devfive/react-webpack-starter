import { appLoaded, AppLoadedAction } from '../../actions/appLoaded';
import { appLoading, AppLoadingAction } from '../../actions/appLoading';
import { appLoadingReducer, AppLoadingReducerState } from '../appLoadingReducer';

describe('appLoadingReducer', () => {
  describe('@app/APP_LOADED', () => {
    it('should change state accordingly', () => {
      // having
      const initialState: AppLoadingReducerState = true;
      const action: AppLoadedAction = appLoaded();

      // when
      // then
      expect(appLoadingReducer(initialState, action)).toEqual(false);
    });
  });

  describe('@app/APP_LOADING', () => {
    it('should change state accordingly', () => {
      // having
      const initialState: AppLoadingReducerState = false;
      const action: AppLoadingAction = appLoading();

      // when
      // then
      expect(appLoadingReducer(initialState, action)).toEqual(true);
    });
  });
});
