import React from 'react';
import { eventStartDelete } from '../../actions/calendar';
import { useDispatch } from 'react-redux';

const DeleteEventFab = () => {
  const dispatch = useDispatch();

  return (
    <button
      className='btn btn-danger fab-danger'
      onClick={() => dispatch(eventStartDelete())}
    >
      <i className='fas fa-trash'></i>
      <span> Borrar evento</span>
    </button>
  );
};

export default DeleteEventFab;