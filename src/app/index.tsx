import '@atlaskit/css-reset';

import 'whatwg-fetch';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import { history, store } from './store';
import { AppContainer } from './components';

ReactDOM.render(
  <Provider store={ store }>
    <ConnectedRouter history={ history }>
      <Route path="/" component={ AppContainer } />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
);
