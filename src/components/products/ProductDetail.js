import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';

export default function ProductDetail() {
  const history = useHistory();

  const { id } = useParams();

  const [product, setProduct] = useState();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((p) => {
        setProduct(p);
      });
  });
  return (
    <div className='container py-5'>
      <button
        className='btn btn-danger mb-5'
        onClick={() => {
          history.goBack();
        }}
      >
        Back
      </button>
      {product && (
        <div className='row'>
          <div className='col-sm-9'>
            <div className='mb-3'>
              <span className='fw-bold'>Category : </span>
              <span>{product.category}</span>
            </div>
            <div className='mb-3'>
              <span className='fw-bold'>Title : </span>
              <span>{product.title}</span>
            </div>
            <div className='mb-3'>
              <span className='fw-bold'>Description : </span>
              <span>{product.description}</span>
            </div>
            <div className='mb-3'>
              <span className='fw-bold'>Description : </span>
              <span>{product.description}</span>
            </div>
            <div className='mb-3'>
              <span className='fw-bold'>Price : </span>
              <span>{product.price}</span>
            </div>
          </div>

          <div className='col-sm-3'>
            <img src={product.image} alt='' className='img-fluid' />
          </div>
        </div>
      )}
    </div>
  );
}
