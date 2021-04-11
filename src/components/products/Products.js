import React, { useState, useEffect } from 'react';
import ProductRow from './ProductRow';

export default function Products() {
  const [productList, setProductList] = useState(null);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((products) => {
        console.log(products);

        setProductList(products);
      });
  }, []);

  return (
    <div className='container'>
      {/* {productList?(
        <p>ss</p>
      ):(
        <p className='text-center'>List is empty</p>
      )} */}

      {productList &&
        productList.map((p) => (
          <ProductRow
            key={p.id}
            id={p.id}
            category={p.category}
            title={p.title}
            price={p.price}
          />
        ))}
    </div>
  );
}
