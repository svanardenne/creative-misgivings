import React from 'react';

const MainNav = () => {
    return(
        <div className="nav-container">
            <div className="main-nav">
                <h3 className="nav-title">Creative Misgivings</h3>
                <div className="nav-toggle">
                    <svg viewBox="0 0 210 297" xmlns="http://www.w3.org/2000/svg" >
                    <g className="toggle-fill" fill="#f5f5f5" fill-rule="evenodd" stroke="#000" stroke-opacity=".85981" stroke-width="1.3229">
                        <rect x="25.702" y="99.083" width="157.24" height="13.607" ry="6.8036"/>
                        <rect x="25.702" y="176.89" width="157.24" height="13.607" ry="6.8036"/>
                        <rect x="24.946" y="138.61" width="157.24" height="13.607" ry="6.8036"/>
                    </g>
                    </svg>
                </div>
            </div>
            <div className="desktop-nav">
                <ul className="desktop-nav-list">
                    <li className="nav-item"><a className="desktop-nav-link" href="#home">Home</a></li>
                    <li className="nav-item"><a className="desktop-nav-link" href="#Writing">Writing</a></li>
                    <li className="nav-item"><a className="desktop-nav-link" href="#Doodles">Doodles</a></li>
                    <li className="nav-item"><a className="desktop-nav-link" href="#Quotes">Quotes</a></li>
                    <li className="nav-item"><a className="desktop-nav-link" href="#About">About</a></li>
                    <li className="nav-item"><a className="desktop-nav-link" href="#Contact">Contact</a></li>
                </ul>
            </div>
            <div className="dropdown">
                <ul className="dropdown-list">
                    <li className="nav-item"><a className="nav-link" href="#home">Home</a></li>
                    <li className="nav-item"><a className="nav-link" href="#Writing">Writing</a></li>
                    <li className="nav-item"><a className="nav-link" href="#Doodles">Doodles</a></li>
                    <li className="nav-item"><a className="nav-link" href="#Quotes">Quotes</a></li>
                    <li className="nav-item"><a className="nav-link" href="#About">About</a></li>
                    <li className="nav-item"><a className="nav-link" href="#Contact">Contact</a></li>
                </ul>
            </div>
        </div>
    );
}

export default MainNav;