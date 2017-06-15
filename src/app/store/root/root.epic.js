import { combineEpics } from 'redux-observable';

import { appEpic } from '../app';

const rootEpic = combineEpics(
  appEpic,
  // Add next epics here
);

export { rootEpic };
