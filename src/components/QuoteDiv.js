import React from 'react';
import "./QuoteDiv.css"

const QuoteDiv = () => {
    return(

        <div className="quote-container">
            <h2>Quote of the day</h2>
            <div>
                <p>
                The world is indeed comic, but the joke is on mankind.
                </p>
                <span>- H.P. Lovecraft</span>
                {/* This will be based on a random quote generator API which will either daily, or on page load, pick a quote. */}
            </div>
        </div>

    );
}

export default QuoteDiv;