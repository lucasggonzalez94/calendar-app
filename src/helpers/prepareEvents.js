import moment from 'moment';

export const prepareEvents = (events = []) => {
  const eventsPrepared = events.map(event => ({
    ...event,
    end: moment(event.end).toDate(),
    start: moment(event.start).toDate(),
  }));
  return eventsPrepared;
};