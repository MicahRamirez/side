import { createStore, combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as reduxFormReducer } from 'redux-form'
import { devToolsEnhancer } from 'redux-devtools-extension'


import reducer from './reducer';

const createReduxStore = ({ initParams }) => {
  return createStore(
    combineReducers({
      routing: routerReducer,
      reducer: reducer,
      form: reduxFormReducer,
    }),
    initParams,
    devToolsEnhancer(),
  );
};

export default createReduxStore;
