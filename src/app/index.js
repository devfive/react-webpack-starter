import '../styles/styles.scss';

import 'whatwg-fetch';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';

import { history, store } from './store';
import { AppContainer } from './components';

ReactDOM.render(
  <Provider store={ store }>
    <ConnectedRouter history={ history }>
      <Route path="/" component={ AppContainer } />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
