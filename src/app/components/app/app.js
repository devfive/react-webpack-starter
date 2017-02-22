import React, { PropTypes } from 'react';

import {
  LandingPage,
  Loading,
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
          { this.props.children || <LandingPage /> }
        </main>
      </div>
    );
  }
}

export { App };
