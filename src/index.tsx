import * as React from 'react';
import * as ReactDOM from 'react-dom';

import 'src/index.css';
import preloadCurrencies from 'src/preloadCurrencies';
import registerServiceWorker from 'src/registerServiceWorker';
import Root from 'src/Root';


async function runApp() {
  await preloadCurrencies();
  ReactDOM.render(
    <Root />,
    document.getElementById('root') as HTMLElement
  );
}
registerServiceWorker();

runApp();

