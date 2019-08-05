import { combineEpics, Epic } from 'redux-observable';
import { appEpic } from '../app';
import { RootActions } from './rootActions';
import { RootReducerState } from './rootReducer';

export const rootEpic: Epic<RootActions, RootActions, RootReducerState> = combineEpics(
  appEpic,
  // Add next epics here
);
