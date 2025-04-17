import React from 'react';
import ProductItem from './ProductItem';

const ProductList = ({ products, selectedCategory }) => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductItem
          key={product.id}
          product={product}
          showImages={selectedCategory !== 'All'} // Show images if a specific category is selected
        />
      ))}
    </div>
  );
};

export default ProductList;