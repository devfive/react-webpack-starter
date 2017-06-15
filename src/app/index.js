import '../styles/styles.scss';

// Default, most used by me rxjs packages
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/takeUntil';

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
