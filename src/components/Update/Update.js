import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import './Update.css'

const Update = () => {

    const storedProduct= useLoaderData()
    const [product, setProduct] = useState(storedProduct)

    
    const handelUpdateUser = (event) => {
        event.preventDefault();
        // const form = event.target;
        // form.reset()
        console.log(product)
        fetch(`https://practise-server-mrmerndeveloper.vercel.app/products/${storedProduct._id}`, {
            method: 'PUT',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
            // console.log(data)
                if (data.modifiedCount > 0) {
                    alert('user update successfully')
                    console.log(data)
                    
                }
        })


    }

    const handelUpdateChange = event => {
        const value = event.target.value;
        const field = event.target.name;
        const newProduct = { ...product }
        newProduct[field] = value
        setProduct(newProduct)

    }
   
    return (
        <div className='update-section'>
           
            <form onSubmit={handelUpdateUser}>

                <h1>Please Update: {storedProduct.Product_name}</h1>
                <input onChange={handelUpdateChange} defaultValue={storedProduct?.Product_name} name='Product_name' type="text" placeholder='product_name' /> <br />
                <input onChange={handelUpdateChange} defaultValue={storedProduct?.Price}
                    name='Price' type="text" placeholder='price'/> <br />
                <input onChange={handelUpdateChange} defaultValue={storedProduct?.quantity}
                    name='quantity' type="number" placeholder='quantity' /> <br />
                <input onChange={handelUpdateChange} defaultValue={storedProduct?.photoURL} name='photoURL' type="text" placeholder='photoURL' /> <br />
                <button type='submit' >Update Product</button>
            </form>
        </div>
    );
};

export default Update;