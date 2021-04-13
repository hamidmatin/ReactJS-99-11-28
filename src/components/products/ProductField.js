import React from 'react';

export default function ProductField({label, value}) {
  return (
    <div className='mb-3'>
      <span className='fw-bolder text-warning'>{label} : </span>
      <span>{value}</span>
    </div>
  );
}
