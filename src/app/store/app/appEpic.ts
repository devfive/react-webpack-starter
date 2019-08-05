import { ActionsObservable, Epic, ofType } from 'redux-observable';
import { delay, map } from 'rxjs/operators';
import { Actions } from '../Actions';
import { RootReducerState } from '../root/rootReducer';
import { AppActions, appLoaded } from './appActions';

const LOADING_DELAY: number = 2500;

const appEpic: Epic<AppActions, AppActions, RootReducerState> = (
  action$: ActionsObservable<AppActions>,
) => {
  return action$.pipe(
    ofType(Actions.APP_LOADING),
    map(() => appLoaded()),
    // This is just to emulate loading some data and to display loading indicator
    delay(LOADING_DELAY),
  );
};

export { appEpic };
