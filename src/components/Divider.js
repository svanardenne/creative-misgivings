import React from 'react';

const Divider = () => {
    return(

        <div className="row justify-content-center align-items-center mx-0">
        <div className="col-md-4 text-center text-dark">
            <h2>Quote of the day</h2>
        </div>
        <div className="col-8 col-md-4 text-dark">
            <p>
            The world is indeed comic, but the joke is on mankind.
            </p>
            <span>- H.P. Lovecraft</span>
            {/* This will be based on a random quote generator API which will either daily, or on page load, pick a quote. */}
        </div>
        </div>

    );
}

export default Divider;