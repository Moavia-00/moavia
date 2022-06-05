import React from 'react'
import { HiArrowCircleDown, HiArrowDown } from 'react-icons/hi'
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
const Home = () => {
  return (
    <div name='home' className="bg-[#0a192f] w-full h-screen">
        {/* container */}
        <div className='max-w-[1000px] mx-auto h-full flex flex-col px-8 justify-center'>
        <p className='text-gray-300'>Hi, my name is </p>
        <h1 className='text-4xl sm:text-6xl text-sky-600 font-semibold'>Moavia hassan</h1>
        <h2 className='text-4xl sm:text-5xl text-gray-300 '>I'm a Software Engineer</h2>
        <p className='text-gray-400 max-w-[700px] my-2 '>
            A curious learner and always willing to learn new skills and self-motivated graduate with proven and tested negotiation
            ,deisgn and development skills, currently focused on building full-Stack web Apps.
        </p>
        <div >
            <button className='flex my-2 hover:bg-sky-800 hover:border-sky-800 duration-200  border-2 items-center text-gray-300 px-4 py-2'>
            <Link className='flex items-center'  to="projects"  smooth={true}  duration={500} >
            View Projects <HiArrowDown className='ml-2'/>
            </Link>
            </button>
        </div>

        </div>
    </div>
  )
}

export default Home