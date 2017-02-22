import '../styles/styles.scss';

import 'whatwg-fetch';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router';

import { history, store } from './store/create.store';

import {
  AppContainer,
  SamplePage,
} from './components';

ReactDOM.render(
  <Provider store={ store }>
    <Router history={ history }>
      <Route path="/" component={ AppContainer }>
        <Route path="/sample" component={ SamplePage } />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
