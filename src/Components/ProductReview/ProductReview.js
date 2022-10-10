import React from 'react';
import ProductInReview from '../ProductInReview/ProductInReview';

const ProductReview = ({ shirts, handleToRemoveCart }) => {
    console.log(shirts)
    return (
        <div className='bg-warning  rounded h-100 p-5'>
            <h3 className="text-center fw-bolder">Product Overview</h3>
            {
                shirts.map(shirt => <ProductInReview handleToRemoveCart={handleToRemoveCart} key={shirt._id} shirt={shirt}></ProductInReview>)
            }

        </div>
    );
};

export default ProductReview;