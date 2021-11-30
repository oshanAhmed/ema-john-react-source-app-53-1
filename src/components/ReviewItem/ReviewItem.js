import React from 'react';

const ReviewItem = (props) => {
    const {name, price, quantity, key} =props.product;
    const {handleRemove} = props;
    return (
        <div className="product">
            {/* <div>
                <img src={img} alt="" />
            </div> */}
             <div>
             <h4 className="product-name">Name: {name}</h4>
             <h4>price: {price}</h4>
             <h4>quantity: {quantity}</h4>
             <button
             onClick= {() => handleRemove(key)} 
             className="btn-regular">Remove</button>
             </div>
        </div>
    );
};

export default ReviewItem;