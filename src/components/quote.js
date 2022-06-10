import React from 'react';
import "../style/quote.scss";

export default function Quote(props) {
    return (
        <div className="quote">
            <h1 className='quote-title'>{props.title}!</h1>
            <h2 className='quote-quote'>{props.quote}</h2>
            <h3 className='quote-author'>-{props.author}</h3>
            <img className='quote-image' src={props.background} />
        </div>
    )
}
