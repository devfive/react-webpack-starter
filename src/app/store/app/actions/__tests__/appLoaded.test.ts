import { Actions } from '../../../Actions';
import { appLoaded } from '../appLoaded';

describe('appLoaded action', () => {
  it('should return proper action object', () => {
    // when
    // then
    expect(appLoaded()).toEqual({
      type: Actions.APP_LOADED,
    });
  });
});
