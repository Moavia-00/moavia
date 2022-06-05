import bootstrap from '../assets/bootstrap.png'
import css from '../assets/css.png'
import git from '../assets/git.png'
import github from '../assets/github.png'
import html from '../assets/html.png'
import javascript from '../assets/javascript.png'
import react from '../assets/react.png'
import tailwind from '../assets/tailwind.png'
import sql from '../assets/sql.png'
import React from 'react'

const skills = () => {
  return (
    <div name='skills' className='bg-[#0a192f] '>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto w-full  pb-7 text-gray-300 h-full flex flex-col px-8 justify-center'>
            <div>
                <p className='inline text-4xl border-b-4 border-b-sky-600'>Skills</p>
                <p className='py-4'>These are the technologies that i've worked with:</p>
            </div>
            <div className='grid grid-cols-2 sm:grid-cols-4 gap-4  text-center'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-200'>
                    <img className='w-20 mx-auto' src={html} alt='html logo'></img>
                    <p className='my-2'>Html</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-200'>
                    <img className='w-20 mx-auto' src={css} alt='css logo'></img>
                    <p className='my-2'>CSS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-200'>
                    <img className='w-20 mx-auto' src={javascript} alt='Javascript logo'></img>
                    <p className='my-2'>JavaScript</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-200'>
                    <img className='w-20 mx-auto' src={react} alt='react logo'></img>
                    <p className='my-2'>React JS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-200'>
                    <img className='w-20 mx-auto' src={git} alt='git logo'></img>
                    <p className='my-2'>Git</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-200'>
                    <img className='w-20 mx-auto' src={tailwind} alt='tailwindcss logo'></img>
                    <p className='my-2'>Tailwind CSS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-200'>
                    <img className='w-20 mx-auto' src={bootstrap} alt='bootstrap logo'></img>
                    <p className='pt-3 my-2'>BootStrap 5</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-200'>
                    <img className='w-20 mx-auto' src={sql} alt='bootstrap logo'></img>
                    <p className='my-2'>Database</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default skills