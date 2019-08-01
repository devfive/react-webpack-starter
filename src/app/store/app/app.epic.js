import { delay, map } from 'rxjs/operators';
import { ofType } from 'redux-observable';

import { appLoaded } from './appActions';
import { Actions } from '../Actions';

const appEpic = (action$) => {
  return action$.pipe(
    ofType(Actions.APP_LOADING),
    map(() => appLoaded()),
    // This is just to emulate loading some data and to display loading indicator
    delay(2500),
  );
};

export { appEpic };
