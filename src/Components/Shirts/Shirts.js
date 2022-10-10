import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Shirt from '../Shirt/Shirt';
import './Shirts.css';
const Shirts = () => {
    const shirts = useLoaderData();
    console.log(shirts);
    return (
        <div className='display-container'>
            <Container fluid >
                <Row >
                    <Col sm={12} md={8} className="border">
                        <Row>

                            {

                                shirts.map(shirt => <Shirt></Shirt>)
                            }
                        </Row>

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