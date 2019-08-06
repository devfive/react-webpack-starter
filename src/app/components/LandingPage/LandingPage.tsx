import * as React from 'react';
import { Link } from 'react-router-dom';

// tslint:disable-next-line: no-empty-interface
export interface Props {}

function LandingPage({}: Props): JSX.Element {
  return (
    <div>
      <Link to="/sample">Sample</Link>
    </div>
  );
}

export { LandingPage };
