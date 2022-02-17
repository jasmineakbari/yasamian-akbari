import React from 'react';
import './index.css';
import Navbar from 'react-bootstrap/Navbar';

function Nav() {
    return(
        <div className="nav-wrapper">
            <div className= "nav-bar-row">
                <Nav fill variant="tabs" defaultActiveKey="/abouot-me">
                    <Nav.Item>
                        <Nav.Link href="/about-me">About me</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/projects">Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/contact">Get in Contact</Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>
        </div>
    );
}

export default Nav;