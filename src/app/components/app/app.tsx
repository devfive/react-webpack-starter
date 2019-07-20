import '@atlaskit/css-reset';
import * as React from 'react';
import { ReactChild } from 'react';
import { Route } from 'react-router-dom';

import {
  LandingPage,
  Loading,
  SamplePage,
} from '..';

export interface Props {
  appLoading:() => void;
  children:ReactChild;
  isMenuVisible:boolean;
  isLoading:boolean;
}

export interface State {}

class App extends React.Component<Props, State> {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.appLoading();
  }

  render():JSX.Element {
    const { isLoading } = this.props;

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
