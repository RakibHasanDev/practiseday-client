import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Product from './Product';
import './home.css'

const Home = () => {
    const products = useLoaderData();
    console.log(products)
    const [displayProducts, setDisplayProducts] = useState(products)
   

    const handelDelete = product=> {
        const agree = window.confirm(`are you sure to delete: ${product.Product_name} `)
        if (agree) {
            // console.log('deleting user with id:', user._id)
            fetch(`https://practise-server-mrmerndeveloper.vercel.app/products/${product._id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('user delete successfully');
                        const remainingProduct = displayProducts.filter(p => p._id !== product._id)
                        setDisplayProducts(remainingProduct)
                        
                    }
            })
        }
    }
    return (
        <div className='product-container'>
            <div className='product-listing'>
                {
                    displayProducts.map(pro => <Product
                        key={pro._id}
                        product={pro}
                        handelDelete={handelDelete}>

                    </Product>)
                }
           </div>
        </div>
    );
};

export default Home;