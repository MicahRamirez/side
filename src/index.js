import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory'


import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import createReduxStore from './createStore';

const store = createReduxStore({initParams: {}});
const browserHistory = createHistory();
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={store} >
    <Router history={history}>
      <Route path='/' component={App}/>
    </Router>
  </Provider>
, document.getElementById('root'));
registerServiceWorker();
