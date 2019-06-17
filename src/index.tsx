import React from 'react';
import ReactDOM from 'react-dom';
import createHistory from 'history/createHashHistory';
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router';
import { Provider } from 'mobx-react';
import { Router } from 'react-router-dom';

import App from './App';
import * as serviceWorker from './serviceWorker';
import './index.css';

const routerStore = new RouterStore();

const history = syncHistoryWithStore(createHistory(), routerStore);
const stores = {
  router: routerStore
};

ReactDOM.render(
  <Provider {...stores}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
