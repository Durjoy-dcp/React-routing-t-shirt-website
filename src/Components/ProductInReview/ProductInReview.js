import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import './ProductInReview.css'
const ProductInReview = ({ shirt, handleToRemoveCart }) => {
    const { _id, price, picture, name } = shirt
    return (
        <div className='d-flex my-3 bg-white align-items-center'>
            <div className='p-2 me-2'>
                <img src={picture} alt="" style={{ "height": '120px' }} />
            </div>
            <div className='d-flex justify-content-between w-100 align-items-center'>
                <div >
                    <h4>{name}</h4>
                    <p>${price}</p>
                </div>
                <div className='p-5'>
                    <button onClick={() => handleToRemoveCart(shirt)} className='dlt-button'>

                        <FontAwesomeIcon icon={faTrashAlt} />
                    </button>
                </div>
            </div>




        </div>
    );
};

export default ProductInReview;