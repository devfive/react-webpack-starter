import { Actions } from '../../../Actions';
import { appMenuToggle } from '../appMenuToggle';

describe('appMenuToggle action', () => {
  it('should return proper action object', () => {
    // when
    // then
    expect(appMenuToggle()).toEqual({
      type: Actions.APP_MENU_TOGGLE,
    });
  });
});
