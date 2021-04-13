import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import ProductField from './ProductField';

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
            <ProductField label='Category' value={product.category}/>

            <ProductField label='Title' value={product.title}/>

            <ProductField label='Description' value={product.description}/>
            
            <ProductField label='Price' value={product.price}/>          
          </div>

          <div className='col-sm-3'>
            <img src={product.image} alt='' className='img-fluid' />
          </div>
        </div>
      )}
    </div>
  );
}
