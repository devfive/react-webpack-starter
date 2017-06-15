import { Observable } from 'rxjs/Observable';

import { appLoaded } from './app.actions';
import { APP_LOADING } from './app.constants';

const appEpic = (action$) => {
  return action$.ofType(APP_LOADING)
    .mergeMap(() => {
      return Observable.of(appLoaded())
        .delay(2500);
    });
};

export { appEpic };
