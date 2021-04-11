import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css';

export default function ProductRow(props) {
  return (
    <Link to={`products/${props.id}`} className='text-decoration-none text-secondary'>
      <div className='row p-3 product-row'>
        <div className='col-3'>{props.category}</div>
        <div className='col-7'>{props.title}</div>
        <div className='col-2'>{props.price}</div>
      </div>
    </Link>
  );
}
