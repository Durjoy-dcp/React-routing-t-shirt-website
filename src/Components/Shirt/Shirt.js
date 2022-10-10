import React from 'react';
import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Shirt = ({ shirt, handleToAddCart }) => {
    const { _id, price, picture, name } = shirt
    return (

        <Col sm={6} lg={4} className="g-5" >

            <Card >
                <Card.Img variant="top" src={picture} style={{ 'height': '400px' }} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        <span>Price : ${price}</span>
                    </Card.Text>
                    {/* <Card.Footer></Card.Footer> */}
                    <Button onClick={() => handleToAddCart(shirt)} className="w-100" variant="primary">Add to Cart</Button>
                </Card.Body>
            </Card>
        </Col>


    );
};

export default Shirt;