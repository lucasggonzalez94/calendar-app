import { combineReducers } from 'redux';
import { uiReducer } from './uiReducer';
import { eventsReducer } from './eventsReducer';
import { authReducer } from './authReducer';

export const rootReducer = combineReducers({
  ui: uiReducer,
  calendar: eventsReducer,
  auth: authReducer
});