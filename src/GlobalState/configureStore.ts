import {
  combineReducers,
  configureStore,
  MiddlewareArray,
} from '@reduxjs/toolkit';

// Interfaces
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

// Reducers Import
import ui from './Reducers/ui';

// Middlewares Import
import logger from './Middlewares/logger';
import thunkMiddleware from 'redux-thunk';
const middleware = new MiddlewareArray().concat(thunkMiddleware, logger);

// Reducers
const rootReducer = combineReducers({});
const reducer = combineReducers({ ui });

// Store global
const store = configureStore({ reducer, middleware });
export default store;
