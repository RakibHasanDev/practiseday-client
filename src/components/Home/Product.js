import React from 'react';
import { Link } from 'react-router-dom';
import './product.css'

const Product = ({ product, handelDelete }) => {

    const { _id, Product_name, Price, quantity, photoURL } = product
    return (
        <div>
            <div className='product'>
                <img src={photoURL} alt="" />
                <div className='product-body'>
                    <h1>{Product_name}</h1>
                    <p>Price:{Price}</p>
                    <p>Quantity: {quantity}</p>
               </div>
                <div className='update-section'>
                    <div>
                        
                            <Link to={`/update/${_id}`}>
                                <button style={{padding:'5px 20px', color:'skyBlue'}}>Update</button>

                            </Link>
                      
                        </div>
                    <div>
                        <button style={{padding:'5px 20px', color:'skyBlue'}} onClick={() => handelDelete(product)}>Delete</button>
                    </div>
                </div>

                </div>
            
        </div>
    );
};

export default Product;