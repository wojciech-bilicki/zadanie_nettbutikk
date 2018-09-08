import React, { SFC } from 'react';
import { Provider } from 'react-redux';

import App from 'src/App';
import { store } from 'src/config/store';

export const Root: SFC = () => (

  <Provider store={store}>
    <App />
  </Provider>
);

export default Root;
