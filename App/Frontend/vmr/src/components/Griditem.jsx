import React from 'react';

const GridItem = ({ product }) => {
  return (
    <div className="grid-item p-4 rounded-lg shadow-md hover:shadow-lg-hover">
      {/* <img className="rounded-lg h-48 object-cover w-full" src={product.image} alt={product.title} /> */}
      <h4 className="text-lg font-semibold mt-2">ID: {product.id}</h4>
      <h3 className="text-lg font-semibold mt-2">{product.productName}</h3>
      {/* <h7 className="text-lg font-semibold mt-2">{product.productId}</h7> */}
      <h5 className="text-lg font-semibold mt-2">MRP: {product.mrp}</h5>
      <p className="text-gray-700 mb-2">Product Description: {product.description}</p>
      {/* Additional content as needed */}
    </div>
  );
};

export default GridItem;
