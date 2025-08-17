import React from 'react';

const ShopItem = ({ product }) => (
    <li className="shop-item">
        <img src={product.img} alt={product.name} />
        <h3>{product.name}</h3>
        <p>Price: ${product.price}</p>
        <p>Color: {product.color}</p>
    </li>
);

export default ShopItem;