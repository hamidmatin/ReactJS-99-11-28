import React from 'react';
import ProductRow from './ProductRow';

export default function Products(props) {
  
  return (
    <div className='container-fluid'>
      {/* {productList?(
        <p>ss</p>
      ):(
        <p className='text-center'>List is empty</p>
      )} */}

      {props.productList &&
        props.productList.map((p) => (
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
