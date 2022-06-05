import React,{useState} from 'react'
import {FaBars,FaTimes,FaGithub,FaLinkedin, FaUserTie} from 'react-icons/fa'
import {HiMail} from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs'
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


const Navbar = () => {
  const [nav,setnav]=useState(false);
  const handleClick=()=>{
    setnav(!nav);
  }
  return (
    <div className='fixed shadow-md w-full h-[80px] px-4 flex items-center justify-between bg-[#0a192f] text-gray-300'>
      {/* Logo goes here */}
      <div>
        <h1 className='text-md text-sky-600 flex items-center text-2xl'> <FaUserTie className='mr-2' size={25}/> | Portfolio</h1>
      </div>

      {/* menu */}
      <ul className='md:flex hidden'>
        <li >
        <Link className='hover:border-b-4 hover:text-sky-500 hover:duration-200 hover:border-sky-600 ' to="home"  smooth={true} duration={500} >
          Home
        </Link>
        </li>
        <li> <Link className='hover:border-b-4 hover:text-sky-500 hover:duration-200 hover:border-sky-600 '  to="about"  smooth={true}  duration={500} >
          About
        </Link></li>
        <li> <Link className='hover:border-b-4 hover:text-sky-500 hover:duration-200 hover:border-sky-600 '  to="skills"  smooth={true} offset={-120}  duration={500} >
          Skills
        </Link></li>
        <li> <Link className='hover:border-b-4 hover:text-sky-500 hover:duration-200 hover:border-sky-600 '  to="projects"  smooth={true}  duration={500} >
          Projects
        </Link></li>
        <li> <Link className='hover:border-b-4 hover:text-sky-500 hover:duration-200 hover:border-sky-600 '  to="contact"  smooth={true} offset={-47} duration={500} >
          Contact
        </Link></li>
      </ul>

      {/* hamburger div */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars size={30}></FaBars> : <FaTimes size={30}></FaTimes>}
      </div>
      {/* Mobile menu */}
      <ul className={!nav ? 'hidden' : 'flex flex-col absolute w-full h-screen  top-0 left-0 justify-center items-center bg-[#0a192f]'}>
        <li className='py-6 text-4xl'> <Link className='hover:border-b-4 hover:text-sky-500 hover:duration-200 hover:border-sky-600 ' onClick={handleClick} to="home"  smooth={true} duration={500} >
          Home
        </Link></li>
        <li className='py-6 text-4xl'><Link className='hover:border-b-4 hover:text-sky-500 hover:duration-200 hover:border-sky-600 ' onClick={handleClick}  to="about"  smooth={true}  duration={500} >
          About
        </Link></li>
        <li className='py-6 text-4xl'><Link className='hover:border-b-4 hover:text-sky-500 hover:duration-200 hover:border-sky-600 ' onClick={handleClick}  to="skills"  smooth={true} offset={-120}  duration={500} >
          Skills
        </Link></li>
        <li className='py-6 text-4xl'><Link className='hover:border-b-4 hover:text-sky-500 hover:duration-200 hover:border-sky-600 ' onClick={handleClick}  to="projects"  smooth={true}  duration={500} >
          Projects
        </Link></li>
        <li className='py-6 text-4xl'><Link className='hover:border-b-4 hover:text-sky-500 hover:duration-200 hover:border-sky-600 ' onClick={handleClick}  to="contact"  smooth={true} offset={-47} duration={500} >
          Contact
        </Link></li>
      </ul>

      {/* Soical Icons */}
      <div className='hidden fixed top-[32%] left-0 md:flex flex-col '>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-800'>
            <a target='_black' href='https://www.linkedin.com/in/moavia-hassan-2750211a1/' className='flex justify-between items-center w-full'>LinkedIn <FaLinkedin size={30}/></a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333]'>
            <a target='_black' href='https://github.com/Moavia-00' className='flex justify-between items-center w-full'>Github <FaGithub size={30}/></a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-green-900'>
            <a target='_black' href='https://myaccount.google.com/' className='flex justify-between items-center w-full'>Email <HiMail size={30}/></a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-sky-700'>
            <a target='_black' href='/' className='flex justify-between items-center w-full'>Resume <BsFillPersonLinesFill size={30}/></a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar