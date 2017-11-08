import { persistStore, persistCombineReducers } from 'redux-persist'
import { combineReducers } from "redux";
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger'
import { createLogger } from 'redux-logger';
import { applyMiddleware, createStore } from 'redux';

import storage from 'redux-persist/es/storage' 
import rootReducer from '../reducers' 

function configureStore() {

  const config = {
    key: 'root',
    storage,
  }

  const loggerMiddleware = createLogger();
  const reducer = persistCombineReducers(config, rootReducer)

  const store = createStore(
    reducer,
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware
    )
  );

  let persistor = persistStore(store)
  return { persistor, store }
}

export default configureStore