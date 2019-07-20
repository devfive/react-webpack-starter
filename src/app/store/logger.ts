import { Middleware } from 'redux';
import { createLogger, ReduxLoggerOptions } from 'redux-logger';

const options:ReduxLoggerOptions = {
  collapsed: true,
};

const logger:Middleware = createLogger(options);

export { logger };
