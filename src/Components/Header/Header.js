import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div>

            <Navbar bg="dark" variant="dark" className="fixed-top">
                <Container>
                    <Navbar.Brand href="#home">Shirt Hub</Navbar.Brand>
                    <Nav className="ms-auto ">
                        <Link className='nav-link' to='/'>Shop</Link>
                        <Link className='nav-link' to='orders'>Orders</Link>

                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;