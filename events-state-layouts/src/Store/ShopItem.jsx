import React from 'react';

const ShopItem = ({ product }) => (
    <li className="shop-item">
        <img src={product.img} alt={product.name} />
        <h3>{product.name}</h3>
        <div className="price">
            <p>Price: ${product.price}</p>
            <button>ADD TO CART</button>
        </div>
    </li>
);

export default ShopItem;