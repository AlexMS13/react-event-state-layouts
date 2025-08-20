import React from 'react';
import './ListView.css'
import ShopItem from './ShopItem';


const ListView = ({ items }) => (
    <ul className="list-view">
        {items.map((item, index) => (
            <ShopItem key={index} product={item} />
        ))}
    </ul>
);

export default ListView;