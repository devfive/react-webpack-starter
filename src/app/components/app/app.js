import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import {
  LandingPage,
  Loading,
  SamplePage,
} from '../';

class App extends React.Component {
  static propTypes = {
    children: PropTypes.element,
    isMenuVisible: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired,
    onAppLoaded: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (__DEV__) {
      return setTimeout(() => {
        this.props.onAppLoaded();
      }, 2000);
    }

    this.props.onAppLoaded();
  }

  render() {
    const { isLoading } = this.props;

    if (isLoading) {
      document.body.classList.add('body--loading');
    } else {
      document.body.classList.remove('body--loading');
    }

    return (
      <div>
        <Loading isLoading={ isLoading } />
        <main className="main">
          <Route exact path="/" component={ LandingPage } />
          <Route path="/sample" component={ SamplePage } />
        </main>
      </div>
    );
  }
}

export { App };
