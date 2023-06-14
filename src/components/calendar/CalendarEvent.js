import React from 'react';

const CalendarEvent = ({ event }) => {
  const { title, user } = event;

  return (
    <div>
      <strong>{title}</strong>
      {user ? <span>{` - ${user.name}`}</span> : null}
    </div>
  );
};

export default CalendarEvent;