import React from 'react';
import ProductRow from './ProductRow';

export default function Products({productList}) {
  return (
    <div className='container-fluid mt-5'>
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
