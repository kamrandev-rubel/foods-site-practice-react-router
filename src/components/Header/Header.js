import { MenuIcon, XIcon } from '@heroicons/react/solid';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [open, setOpen] = useState(false)
console.log(open);
    return (
        <header className=' bg-indigo-500 h-20 flex items-center  '>
            <div className='flex flex-col  lg:flex-row justify-between items-center w-full lg:w-10/12 mx-auto text-white font-semibold'>
                <div className='text-3xl items-center cursor-pointer hover:text-yellow-500 flex justify-between w-10/12'>
                    <div>
                        LOGO
                    </div>
                    <div>
                        <div onClick={()=>setOpen(!open)} className='w-10 h-10 lg:hidden '>
                            {
                                open ?<MenuIcon />: <XIcon/>
                            }
                        </div>
                    </div>
                </div>

                <ul className={`w-full  text-center lg:justify-end bg-indigo-500 text-lg flex flex-col lg:flex-row absolute lg:static duration-[650ms] ease-in ${open?'top-[-400px]':'top-[60px]'}`}>
                    <Link className='ml-5 hover:text-yellow-500' to="/">Home</Link>
                    <Link className='ml-5 hover:text-yellow-500' to="/categories">Categories</Link>
                    <Link className='ml-5 hover:text-yellow-500' to="/about">About</Link>
                    <Link className='ml-5 hover:text-yellow-500' to="/contact">Contact</Link>

                </ul>
            </div>
        </header>
    );
};

export default Header;