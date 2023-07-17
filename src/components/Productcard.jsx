import React from 'react';
import AddToCartButton from './Addcartbtn';

const ProductCard = ({ title, imageUrl, description }) => {
    console.log(title, imageUrl, description,"ProductCard");
  return (
    <div className="rounded-lg overflow-hidden shadow-lg">
      <img className="w-full h-48 object-cover object-center" src={imageUrl}  />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p>{description}</p>
        <AddToCartButton className="mt-4"/>
      </div>
    </div>
  );
};

export default ProductCard;