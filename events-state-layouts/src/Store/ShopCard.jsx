 import React from 'react';

const ShopCard = ({ product }) => (
    <div className="shop-card">
        <h3 className="name">{product.name}</h3>
        <img src={product.img} alt={product.name} />
        <p className="color">{product.color}</p>
        <div className="price">
            <p >Price: ${product.price}</p>
            <button>ADD TO CART</button>
        </div>
           
    </div>
);

export default ShopCard;