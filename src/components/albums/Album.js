import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteAlbum } from '../../redux/actions';
export default function Album({ id, title }) {
  const dispatch = useDispatch();

  return (
    <div>
      <h3>{title}</h3>
      <div className='d-flex justify-content-end'>
        <button
          className='btn btn-danger'
          onClick={() => {
            dispatch(deleteAlbum(id));
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
