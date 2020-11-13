import React from 'react';

const Divider = () => {
    return(

        <div className="row justify-content-center align-items-center mx-0">
        <div className="col-md-4 text-center text-dark">
            <h2>I am a divider!</h2>
        </div>
        <div className="col-8 col-md-4 text-dark">
            <p>
            Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt 
            ut labore et dolore magna aliqua. 
            </p>
            {/* Possibly include large-text declarations of skills here */}
        </div>
        </div>

    );
}

export default Divider;