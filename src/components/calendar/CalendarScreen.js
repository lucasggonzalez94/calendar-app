import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';

import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'moment/locale/es';

import NavBar from '../ui/NavBar';
import CalendarEvent from './CalendarEvent';
import CalendarModal from './CalendarModal';

import { messages } from '../../helpers/calendar-messages-es';
import { useDispatch, useSelector } from 'react-redux';
import { uiOpenModal } from '../../actions/ui';
import { eventSetActive } from '../../actions/calendar';
import AddNewFab from '../ui/AddNewFab';
import DeleteEventFab from '../ui/DeleteEventFab';

moment.locale('es');

const localizer = momentLocalizer(moment);

const CalendarScreen = () => {

  const { events, activeEvent } = useSelector(state => state.calendar);
  const dispatch = useDispatch();

  const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'month');

  const onDoubleClick = () => {
    dispatch(uiOpenModal());
  };
  
  const onSelectEvent = (e) => {
    dispatch(eventSetActive(e));
  };

  const onViewChange = (e) => {
    setLastView(e);
    localStorage.setItem('lastView', e);
  };

  const onSelectSlot = () => {
    dispatch(eventSetActive(null));
  };

  const eventStyleGetter = () => {
    const style = {
      backgroundColor: '#367CF7',
      opacity: 0.8,
      display: 'block',
      color: 'white'
    };

    return {
      style
    };
  };

  return (
    <div className='calendar-screen'>
      <NavBar />
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        messages={messages}
        eventPropGetter={ eventStyleGetter }
        onDoubleClickEvent={onDoubleClick}
        onSelectEvent={onSelectEvent}
        onView={onViewChange}
        onSelectSlot={onSelectSlot}
        selectable
        view={lastView}
        components={{
          event: CalendarEvent
        }}
      />
      <CalendarModal />
      {activeEvent && <DeleteEventFab />}
      <AddNewFab />
    </div>
  );
};

export default CalendarScreen;
