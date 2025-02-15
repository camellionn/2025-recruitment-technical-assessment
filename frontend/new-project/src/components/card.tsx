import React from 'react';
import "../styles/Card.css"

interface CardProps {
    src: string;
    alt: string;
    caption?: string;
}

const Card: React.FC<CardProps> =  ({src, alt, caption}) => {
    return (
        <div className='card-container'>
            <img className='image' src={src} alt={alt} />
            {caption && <p className='caption'>{caption}</p>}
        </div>
    );
};

export default Card;