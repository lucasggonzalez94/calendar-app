import React from 'react';
import { uiOpenModal } from '../../actions/ui';
import { useDispatch } from 'react-redux';

const AddNewFab = () => {

  const dispatch = useDispatch();

  return (
    <button
      className='btn btn-primary fab'
      onClick={() => dispatch(uiOpenModal())}
    >
      <i className='fas fa-plus'></i>
    </button>
  );
};

export default AddNewFab;