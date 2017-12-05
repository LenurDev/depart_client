import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import axios from 'axios';

import App from './router';
import registerServiceWorker from './registerServiceWorker';

axios.defaults.baseURL = 'http://localhost:7000';

render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root')
);
registerServiceWorker();
