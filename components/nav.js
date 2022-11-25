"use client"
import Logo from './logo.js';
import { useState } from 'react';
import Link from 'next/link';
import Home from  "../styles/Home.module.css";

export default function Nav() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  return (
    <>
      <nav className="relative container m-auto p-6 bg-white dark:bg-black">
        <div className="flex  items-center justify-between">
          <Logo />
          <div className="hidden md:flex space-x-6 dark:text-white">
            <Link href="/todos" className="hover:text-darkGrayishBlue ">Todos</Link>
            <Link href="" className="hover:text-darkGrayishBlue">Product</Link>
            <Link href="" className="hover:text-darkGrayishBlue">about Us</Link>
            <Link href="" className="hover:text-darkGrayishBlue">Careers</Link>
            <Link href="" className="hover:text-darkGrayishBlue">Community</Link>
          </div>
          <Link href="#" className="hidden px-6 pt-2 p-3 text-white  dark:bg-dark dark:text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight  md:block">Get Started</Link>
          <div className='hidden md:flex space-x-2'>
            <button onClick={() => {setIsDark(!isDark);document.querySelector('html').classList.toggle("dark");}}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={isDark?"hidden":"block w-8 h-8 "}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
              </svg>
            
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={isDark?" block w-8 h-8 text-white":"hidden"}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
              </svg>
            </button>
          </div>
        
          <button id="menu-btn" className={isNavOpen ? Home.open +' '+ Home.hamburger + '  block  focus:outline-none dark:bg-white '  :  Home.hamburger +'  md:hidden focus:outline-none  dark:bg-white '} onClick={() => {setIsNavOpen(!isNavOpen);console.log(isNavOpen)}}>
            <span className={ Home.hamburgerTop }></span>
            <span className={ Home.hamburgermiddle }></span>
            <span className={ Home.hamburgerBottom }></span>
          </button>
        </div>
        <div className={isNavOpen ?  Home.ShowMenuNav :  Home.hideMenuNav}>
          <div id='menu' className=' flex absolute md:flex flex-col items-center  self-end  py-8 mt-10 space-y-6 font-bold  bg-white dark:bg-dark sm:w-auto sm:self-center left-6 right-6 drop-shadow-md dark:bg-black dark:text-white'
            onClick={() => setIsNavOpen(!isNavOpen)}>
            <Link href="/todos" className='hover:text-darkGrayishBlue'>Todos</Link>
            <Link href="#" className='hover:text-darkGrayishBlue'>Product</Link>
            <Link href="#" className='hover:text-darkGrayishBlue'>about Us</Link>
            <Link href="#" className='hover:text-darkGrayishBlue'>Careers</Link>
            <Link href="#" className='hover:text-darkGrayishBlue'>Community</Link>
          </div>
        </div>
      </nav>
    </>
  );
}