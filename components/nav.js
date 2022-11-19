"use client"
import Logo from './logo.js';
import { useState } from 'react';

export default function Nav() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <div>
    <nav className="relative container m-auto p-6">
      <div className="flex  items-center justify-between">
          <Logo />
          <div className="hidden md:flex space-x-6">
              <a href="" className="hover:text-darkGrayishBlue">Pricing</a>
              <a href="" className="hover:text-darkGrayishBlue">Product</a>
              <a href="" className="hover:text-darkGrayishBlue">About Us</a>
              <a href="" className="hover:text-darkGrayishBlue">Careers</a>
              <a href="" className="hover:text-darkGrayishBlue">Community</a>
          </div>
          <a href="#" className="hidden px-6 pt-2 p-3 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight  md:block">Get Started</a>
          <button id="menu-btn" className={isNavOpen ? "open block hamburger md:hidden focus:outline-none" : 'block hamburger md:hidden focus:outline-none' } onClick={()=> setIsNavOpen((prev) => !prev)}>
            <span className='hamburger-top'></span>
            <span className='hamburger-middle'></span>
            <span className='hamburger-bottom'></span>
          </button>
      </div>
      <div className={ isNavOpen ? "ShowMenuNav" : "hideMenuNav"}>
        <div id='menu' className=' flex absolute md:flex flex-col items-center  self-end  py-8 mt-10 space-y-6 font-bold  bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md'
        onClick={()=>setIsNavOpen(false)}>
          <a href="#" className='hover:text-darkGrayishBlue'>Pricing</a>
          <a href="#" className='hover:text-darkGrayishBlue'>Product</a>
          <a href="#" className='hover:text-darkGrayishBlue'>About Us</a>
          <a href="#" className='hover:text-darkGrayishBlue'>Careers</a>
          <a href="#" className='hover:text-darkGrayishBlue'>Community</a>
        </div>
      </div>

    </nav>
    </div>
    );
  }