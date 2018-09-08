import * as React from 'react';
import * as ReactDOM from 'react-dom';

import 'src/index.css';
import registerServiceWorker from 'src/registerServiceWorker';
import Root from 'src/Root';

ReactDOM.render(
  <Root />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
