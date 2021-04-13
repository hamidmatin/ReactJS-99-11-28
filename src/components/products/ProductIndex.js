import React, { useState, useEffect } from 'react';
import Products from './Products';
import WidthLoading from '../../HOC/WithLoading';
import PageTitle from '../pageTitle/PageTitle';

export default function ProductIndex() {
  const [isloading, setIsLoading] = useState(true);
  const [productList, setProductList] = useState(null);

  const ProductsWidthLoading = WidthLoading(Products);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((products) => {
        console.log(products);

        setProductList(products);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className='container'>
      
      <PageTitle title='Products' />

      <div className='row'>
        <div className='col-sm-2'>
          <aside>Aside</aside>
        </div>
        <div className='col-sm-10'>
          <ProductsWidthLoading
            isLoading={isloading}
            productList={productList}
          />
        </div>
      </div>
    </div>
  );
}
