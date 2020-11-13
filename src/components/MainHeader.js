import React from 'react';
import {Jumbotron, Container, Button} from 'react-bootstrap';

const MainHeader = () => {
    return(

        <Jumbotron 
        className="p-0 text-white m-0 bg-success" 
        fluid 
        id="intro">
            <Container className="text-center my-auto">
                <h1 className="header-title">Creative Misgivings</h1>
                <p className="header-text">
                Hello, I am a placeholder for Anila Schneider's portfolio page!
                </p>
                <div className="header-button">
                    {/* Place a button here which sends the user out of the Jumbotron */}
                    <Button variant="primary">Down Arrow</Button>
                </div>
            </Container>
        </Jumbotron>

    );
}

export default MainHeader;