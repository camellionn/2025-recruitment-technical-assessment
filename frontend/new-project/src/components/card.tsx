import React from 'react';
import "../styles/Card.css";
import { Dot } from 'lucide-react';

interface CardProps {
    src: string;
    alt: string;
    textTop: string;
    textBottom: string;}

const Card: React.FC<CardProps> =  ({src, alt, textTop, textBottom }) => {
    return (
        <div className='card-container'>
            <img className='image' src={src} alt={alt} />

            <div className='text-overlay'>
                <div className='text-top-container'>
                    <div className='ping'>
                        <Dot color='green'
                        size={20} />
                    </div>
                    <div className='text-top'>
                        <p>{`${textTop} rooms available`}</p>
                    </div>

                </div>
                <p className='text-bottom'>{textBottom}</p>
            </div>
        </div>
    );
};

export default Card;