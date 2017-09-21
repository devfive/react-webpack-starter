import { map } from 'rxjs/operator/map';
import { delay } from 'rxjs/operator/delay';

import { appLoaded } from './app.actions';
import { APP_LOADING } from './app.constants';

const appEpic = (action$) => {
  return action$.ofType(APP_LOADING)
    ::map(() => appLoaded())
    ::delay(2500);
};

export { appEpic };
