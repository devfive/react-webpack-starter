import { Actions } from '../../../Actions';
import { appLoading } from '../appLoading';

describe('appLoading action', () => {
  it('should return proper action object', () => {
    // when
    // then
    expect(appLoading()).toEqual({
      type: Actions.APP_LOADING,
    });
  });
});
