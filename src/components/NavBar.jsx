import React from 'react'
import { close, logo, menu } from '../assets'
import { navLinks } from '../constants'
import { useState } from 'react'



const NavBar = () => {
    
  const [toggle, setToggle] = useState(false);

  const hoveredText = () => {
    const [isHovered, setIsHovered] = useState(false);

    const Hovered = () => {
      setIsHovered(!isHovered);
    }

    const hoverEffectStyle = {
      ':hover': {
        transform: 'scale(1.1)',
        transition: 'transform 0.3s ease',
      },
    };
  }

  return (

    
<nav className='w-full flex py-2 justify-between items-center navbar'>
  <img src={logo} alt="logo" className='w-110 h-32' />

  <ul className="list-none sm:flex hidden justify-end items-center flex-1 hover-effect">
  {navLinks.map((nav, index) => (
    <li
      key={nav.id}
      className={`font-poppins hover:text-secondary font-normal cursor-pointer text-16 ${
        index === navLinks.length - 1 ? 'mr-1' : 'mr-10'
      } text-white mr-10 transition-all`}
    >
      <a href={`#${nav.id}`}>{nav.title}</a>
    </li>
  ))}
</ul>
s




    <div className="sm:hidden flex-1 items-center justify-end flex ">
      <img src={toggle ? close : menu} alt="menu" 
       className='w-[28px] h-[28px] object-contain'
       onClick={() => setToggle((prev) => !prev)}
       />

      <div className=
       {`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0
        mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>

  <ul className="list-none flex flex-col justify-end items-center flex-1">
      {navLinks.map((nav, index) => (
   <li key={nav.id} 
    className={`font-poppins hover:text-secondary font-normal cursor-pointer text-{16px} 
     ${index === navLinks.length -1 ? 'mb-4' : 'mr-10' } text-white mr-10`}>
      <a href={`#${nav.id}`}>{nav.title}</a>
   </li>
      ))}
  </ul>
       </div>
    </div>
  </nav>
  )
}

export default NavBar
