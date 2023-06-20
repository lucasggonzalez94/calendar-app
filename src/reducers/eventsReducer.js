import { types } from '../types/types';

// {
//   id: new Date().getTime(),
//   title: 'Mi cumpleaños',
//   start: moment().toDate(),
//   end: moment().add(2, 'hours').toDate(),
//   notes: 'jsdhjksdh',
//   user: {
//     _id: '123',
//     name: 'Lucas'
//   }
// }

const initialState = {
  events: [],
  activeEvent: null
};

export const eventsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.eventSetActive:
      return {
        ...state,
        activeEvent: action.payload
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
    case types.eventLoaded:
      return {
        ...state,
        events: [...action.payload]
      };
  
    default:
      return state;
  }
};