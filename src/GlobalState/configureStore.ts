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
import thunkMiddleware from 'redux-thunk';
const middleware = new MiddlewareArray().concat(thunkMiddleware);

// Reducers
const rootReducer = combineReducers({});
const reducer = combineReducers({ ui });

// Store global
const store = configureStore({ reducer, middleware });
export default store;
