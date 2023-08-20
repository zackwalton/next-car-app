"use client"

import React from 'react';
import Image from "next/image";
import Logo from '../public/Logo.png';
import Link from 'next/link';
import {AiOutlineMenu} from 'react-icons/ai';
import { useState } from 'react';

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const handleNav = () => {
        setMenuOpen(!menuOpen);
        menuOpen ? "fixed left-0 top-0 w-[65%] sm:hidden h-screen bg-[#ecf0f3] p-10 ease-in duration-500" : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
    }



  return (
    <nav className="w-full h-24 shadow-xl bg-[url('/bg.jpg')]">
        <div className="flex justify-between items-center h-full w-full px-4 2xl:px-16">
            <Link href='/'>
                <Image
                    src={Logo}
                    alt="Logo"
                    width="150"
                    height="50"
                    className="cursor-pointer"
                    priority
                />
            </Link>
            <div className='hidden md:flex pr-4'>
                <ul className='hidden sm:flex'>
                    <Link href="/">
                        <li className='ml-10 uppercase hover:border-b text-xl text-white'>Home</li>
                    </Link>
                    <Link href="marketplace">
                        <li className='ml-10 uppercase hover:border-b text-xl text-white'>Market</li>
                    </Link>
                    <Link href="contact-us">
                        <li className='ml-10 uppercase hover:border-b text-xl text-white'>Contact Us</li>
                    </Link>
                    <Link href="services">
                        <li className='ml-10 uppercase hover:border-b text-xl text-white'>Services</li>
                    </Link>
                </ul>
            </div>
            <div onClick={handleNav} className="md:hidden cursor-pointer pl-24 bg-black text-white hover:border-w">
                <AiOutlineMenu size={30} />
            </div>
        </div>
        <div className={menuOpen ? "fixed left-0 top-0 w-[65%] sm:hidden h-screen bg-black p-10 ease-in duration-500" : "fixed left-[-100%] top-0 p-10 ease-in duration-500 "}>
            <ul>
                <Link href="/" onClick={handleNav}>
                    <li className=' uppercase hover:border-b text-xl text-white'>Home</li>
                </Link>
                <Link href="marketplace" onClick={handleNav}>
                    <li className=' uppercase hover:border-b text-xl text-white'>Market</li>
                </Link>
                <Link href="contact-us" onClick={handleNav}>
                    <li className=' uppercase hover:border-b text-xl text-white'>Contact Us</li>
                </Link>
                <Link href="services" onClick={handleNav}>
                    <li className=' uppercase hover:border-b text-xl text-white'>Services</li>
                </Link>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar
