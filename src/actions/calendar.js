import { fetchToken } from '../helpers/fetch';
import { prepareEvents } from '../helpers/prepareEvents';
import { types } from '../types/types';

export const eventStartAddNew = (event) => {
  return async (dispatch, getState) => {

    const { uid, name } = getState().auth;

    try {
      const res = await fetchToken('events', event, 'POST');
      const response = await res.json();

      if (response.ok) {
        event.id = response.event.id;
        event.user = {
          uid,
          name
        };
        dispatch(eventAddNew(event));
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  };
};

const eventAddNew = (event) => ({
  type: types.eventAddNew,
  payload: event,
});

export const eventSetActive = (event) => ({
  type: types.eventSetActive,
  payload: event,
});

export const eventUpdate = (event) => ({
  type: types.eventUpdate,
  payload: event,
});

export const eventDelete = () => ({
  type: types.eventDelete,
});

export const eventStartLoading = () => {
  return async (dispatch) => {
    try {
      const res = await fetchToken('events');
      const response = await res.json();

      const events = prepareEvents(response.events);

      dispatch(eventsLoaded(events));
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  };
};

const eventsLoaded = (events) => ({
  type: types.eventLoaded,
  payload: events
});
