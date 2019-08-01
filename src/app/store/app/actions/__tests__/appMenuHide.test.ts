import { Actions } from '../../../Actions';
import { appMenuHide } from '../appMenuHide';

describe('appMenuHide action', () => {
  it('should return proper action object', () => {
    // when
    // then
    expect(appMenuHide()).toEqual({
      type: Actions.APP_MENU_HIDE,
    });
  });
});
