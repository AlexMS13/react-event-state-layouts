import React from 'react';
import './CardsView.css'
import ShopCard from './ShopCard';

const CardsView = ({ cards }) => (
    <div className="cards-view">
        {cards.map((card, index) => (
        <ShopCard key={index} product={card} />
        ))}
    </div>
);

export default CardsView;