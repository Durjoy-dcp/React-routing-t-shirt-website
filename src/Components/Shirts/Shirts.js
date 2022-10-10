import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import ProductReview from '../ProductReview/ProductReview';
import Shirt from '../Shirt/Shirt';
import './Shirts.css';
const Shirts = () => {
    const shirts = useLoaderData();
    const [cart, setCart] = useState([]);
    const handleToAddCart = shirt => {

        const shirtCheck = cart.find(sh => sh._id === shirt._id);
        if (shirtCheck) {
            alert("This is added ");
        } else {
            const cartAdded = [...cart, shirt];
            console.log(cartAdded);
            setCart(cartAdded);
        }

    }
    const handleToRemoveCart = shirt => {
        const remaining = cart.filter(sh => sh._id !== shirt._id);
        setCart(remaining);
    }

    // console.log(shirts);
    return (
        <div className='display-container'>
            <Container fluid >
                <Row >
                    <Col sm={12} md={8} className="">
                        <Row >
                            <h3 className='text-center my-4 fw-bold mb-1'>Select Your shirts</h3>
                            {

                                shirts.map(shirt => <Shirt key={shirt._id} handleToAddCart={handleToAddCart} shirt={shirt}></Shirt>)
                            }
                        </Row>

                    </Col>
                    <Col sm={12} md={4} className="">
                        <ProductReview handleToRemoveCart={handleToRemoveCart} shirts={cart}></ProductReview>
                    </Col>

                </Row>


            </Container>

        </div>

    );
};

export default Shirts;