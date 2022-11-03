import React from 'react';
import { Link } from 'react-router-dom';
import './header.css'

const Header = () => {
    return (
        <div className='header'>
            <Link to='/'>Home</Link>
            <Link to='/product/add'>Insert</Link>
           
        </div>
    );
};

export default Header;