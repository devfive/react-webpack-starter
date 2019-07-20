import '@atlaskit/css-reset';

import { ConnectedRouter } from 'connected-react-router';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import 'whatwg-fetch';

import { AppContainer } from './components';
import { history, store } from './store';

ReactDOM.render(
  (
    <Provider store={ store }>
      <ConnectedRouter history={ history }>
        <Route path="/" component={ AppContainer } />
      </ConnectedRouter>
    </Provider>
  ),
  document.getElementById('root'),
);
