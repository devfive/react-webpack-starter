import * as React from 'react';
import { Route } from 'react-router-dom';

import {
  LandingPage,
  Loading,
  SamplePage,
} from '..';

export interface Props {
  appLoading: () => void;
  children: React.ReactChild;
  isLoading: boolean;
  isMenuVisible: boolean;
}

class App extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
  }

  public componentDidMount(): void {
    this.props.appLoading();
  }

  public render(): JSX.Element {
    const { isLoading } = this.props;

    return (
      <div>
        <Loading isLoading={ isLoading } />
        <main className="main">
          <Route exact={ true } path="/" component={ LandingPage } />
          <Route path="/sample" component={ SamplePage } />
        </main>
      </div>
    );
  }
}

export { App };
