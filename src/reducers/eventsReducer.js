import moment from 'moment';

import { types } from '../types/types';

const initialState = {
  events: [{
    title: 'Mi cumpleaños',
    start: moment().toDate(),
    end: moment().add(2, 'hours').toDate(),
    user: {
      _id: '123',
      name: 'Lucas'
    }
  }],
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
  
    default:
      return state;
  }
};