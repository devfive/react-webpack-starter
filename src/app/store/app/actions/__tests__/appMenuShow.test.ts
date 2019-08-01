import { Actions } from '../../../Actions';
import { appMenuShow } from '../appMenuShow';

describe('appMenuShow action', () => {
  it('should return proper action object', () => {
    // when
    // then
    expect(appMenuShow()).toEqual({
      type: Actions.APP_MENU_SHOW,
    });
  });
});
