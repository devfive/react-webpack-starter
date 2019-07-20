import { delay, map } from 'rxjs/operators';
import { ofType } from 'redux-observable';

import { appLoaded } from './app.actions';
import { APP_LOADING } from './app.constants';

const appEpic = (action$) => {
  return action$.pipe(
    ofType(APP_LOADING),
    map(() => appLoaded()),
    delay(2500),
  );
};

export { appEpic };
