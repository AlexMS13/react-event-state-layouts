import React from 'react';
import ShopItem from './ShopItem';


const ListView = ({ items }) => (
    <ul className="list-view">
        {items.map((item, index) => (
            <ShopItem key={index} product={item} />
        ))}
    </ul>
);

export default ListView;