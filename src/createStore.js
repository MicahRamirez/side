import { createStore, combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { devToolsEnhancer } from 'redux-devtools-extension';


import reducer from './reducer';

const createReduxStore = ({ initParams }) => {
  return createStore(
    combineReducers({
      routing: routerReducer,
      reducer: reducer,
    }),
    initParams,
    devToolsEnhancer(),
  );
};

export default createReduxStore;
