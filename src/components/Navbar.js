import React from 'react';

const MainNav = () => {
    return(
        <div className="nav-container">
            <div className="main-nav">
                <h3 className="nav-title">Creative Misgivings</h3>
                <div className="nav-toggle">
                    <h1>^</h1>
                </div>
            </div>
            <div className="desktop-nav">
                <ul className="desktop-nav-list">
                    <li><a className="desktop-nav-link" href="#home">Home</a></li>
                    <li><a className="desktop-nav-link" href="#Writing">Writing</a></li>
                    <li><a className="desktop-nav-link" href="#Doodles">Doodles</a></li>
                    <li><a className="desktop-nav-link" href="#Quotes">Quotes</a></li>
                    <li><a className="desktop-nav-link" href="#About">About</a></li>
                    <li><a className="desktop-nav-link" href="#Contact">Contact</a></li>
                </ul>
            </div>
            <div className="dropdown">
                <ul className="dropdown-list">
                    <li><a className="nav-link" href="#home">Home</a></li>
                    <li><a className="nav-link" href="#Writing">Writing</a></li>
                    <li><a className="nav-link" href="#Doodles">Doodles</a></li>
                    <li><a className="nav-link" href="#Quotes">Quotes</a></li>
                    <li><a className="nav-link" href="#About">About</a></li>
                    <li><a className="nav-link" href="#Contact">Contact</a></li>
                </ul>
            </div>
        </div>
    );
}

export default MainNav;