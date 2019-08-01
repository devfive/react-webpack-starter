import { combineEpics } from 'redux-observable';
import { appEpic } from '../app';

export const rootEpic: any = combineEpics(
  appEpic,
  // Add next epics here
);
