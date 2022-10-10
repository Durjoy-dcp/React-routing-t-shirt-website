import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Shirts.css';
const Shirts = () => {
    return (
        <div className='display-container'>
            <Container fluid>
                <Row>
                    <Col sm={12} md={8} className="border">
                        <h1>This is a shirts page </h1>
                    </Col>
                    <Col sm={12} md={4} className="border">
                        <h1>This is a product overview </h1>
                    </Col>

                </Row>


            </Container>

        </div>

    );
};

export default Shirts;