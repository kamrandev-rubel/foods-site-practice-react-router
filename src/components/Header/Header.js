import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='bg-indigo-500 h-20 flex items-center'>
            <div className='flex justify-between items-center w-10/12 mx-auto text-white font-semibold'>
                <div className='text-3xl cursor-pointer hover:text-yellow-500'>
                    LOGO
                </div>
                <ul className='text-lg'>
                    <Link className='ml-5 hover:text-yellow-500' to="/">Home</Link>
                    <Link className='ml-5 hover:text-yellow-500' to="/categories">Categories</Link>
                    <Link className='ml-5 hover:text-yellow-500' to="/about">About</Link>
                    <Link className='ml-5 hover:text-yellow-500' to="/contact">Contact</Link>
                </ul>
            </div>
        </div>
    );
};

export default Header;