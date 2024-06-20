import React from 'react';
import{ useState } from 'react';
import { Bars3Icon } from '@heroicons/react/24/solid'

const Header = () => {
  const[toggleMenu,setToggleMenu]=useState(false);
    return (
      <header className="flex justify-between px-1 py-3 ag-secondary">
        <a className="font-bold text-white"herf="#"> ANANTHGANESH</a>
        <nav className="hidden md:block">
        <ul className="flex text-white">
          <li><a href="/">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contacts">Contacts</a></li>
        </ul>
        </nav>
        {toggleMenu && <nav className="block md:hidden ">
        <ul className="flex  flex-col  text-white  mobile-nav">
          <li><a href="7">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contacts">Contacts</a></li>
        </ul>
        </nav>}
        <button onClick={()=>setToggleMenu(!toggleMenu)} className='block md:hidden'><Bars3Icon className='text-white h-5'/></button>
        </header>

    );
};

export default Header;
