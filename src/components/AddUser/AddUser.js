import React, { useState } from 'react';
import './addProduct.css'

const AddUser = () => {
    const [product, setProduct]= useState({})

    const handelUser = (event) => {
        event.preventDefault();
        const form = event.target;
        // form.reset()
        console.log(product)

        fetch('https://practise-server-mrmerndeveloper.vercel.app/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(product)
            
            
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert('user added successfully')
                    console.log(data)
                    form.reset()
                }
               
        })

    }

    const handelInputBlur = event => {
        const value = event.target.value;
        const field = event.target.name;
        const newProduct = {...product}
        newProduct[field] = value
        setProduct(newProduct)

    }

    return (
        <div className='add-product'>
           
            <form onSubmit={handelUser}>
                
                <h2>Please add new Product</h2>
                <input onChange={ handelInputBlur }  name='Product_name' type="text"  placeholder='product_name'/> <br />
                <input onChange={ handelInputBlur }  name='Price' type="text"  placeholder='price'/> <br />
                <input  onChange={ handelInputBlur } name='quantity' type="number"  placeholder='quantity'/> <br />
                <input  onChange={ handelInputBlur } name='photoURL' type="text"  placeholder='photoURL'/> <br />
                <button type='submit' >Add Product</button>
            </form>
        </div>
    );
};

export default AddUser;