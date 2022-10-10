import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div>

            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Shirt Hub</Navbar.Brand>
                    <Nav className="ms-auto nav-link">
                        <Link to='/'><Nav.Link >Order</Nav.Link></Link>
                        <Link><Nav.Link href="#features">Features</Nav.Link></Link>


                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;