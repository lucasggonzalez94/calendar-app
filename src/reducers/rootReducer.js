import { combineReducers } from 'redux';
import { uiReducer } from './uiReducer';
import { eventsReducer } from './eventsReducer';

export const rootReducer = combineReducers({
  ui: uiReducer,
  calendar: eventsReducer
});