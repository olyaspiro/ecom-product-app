import React, { useState, useEffect } from 'react';

const ProductItem = ({ product, showImages }) => {
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    setShowImage(showImages); // Automatically show or hide images based on the prop
  }, [showImages]);

  const handleShowImage = () => {
    setShowImage(true); // Show the image when the button is clicked
  };

  return (
    <div className="product-card">
      <h2 className="product-name">{product.name}</h2>
      <p className="product-price">${product.price.toFixed(2)}</p>
      <p className="product-description">{product.description}</p>

      {showImage ? (
        <img
          src={product.image}
          alt={product.name}
          className="product-image"
        />
      ) : (
        <button onClick={handleShowImage} className="show-image-button">
          Show Image
        </button>
      )}
    </div>
  );
};

export default ProductItem;