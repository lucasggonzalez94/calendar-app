import { types } from '../types/types';

const initialState = {
  checking: true,
//   uid: null,
//   name: null
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.authLogin:
      return {
        ...state,
        checking: false,
        ...action.payload
      };
    case types.eventAddNew:
      return {
        ...state,
        events: [...state.events, action.payload]
      };
    case types.eventUpdate:
      return {
        ...state,
        events: state.events.map(e => (e.id === action.payload.id) ? action.payload : e)
      };
    case types.eventDelete:
      return {
        ...state,
        events: state.events.filter(e => e.id !== state.activeEvent.id),
        activeEvent: null
      };
  
    default:
      return state;
  }
};