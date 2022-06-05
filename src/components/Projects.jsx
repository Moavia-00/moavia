import React from 'react'
import { FaGithub } from 'react-icons/fa'
import datastructure from '../assets/datastructure.png'
import expertacademia from '../assets/expertacademia.png'
import patientdoctor from '../assets/patientdoctor.png'

const Projects = () => {
  return (
    <div name='projects' className='w-full text-gray-300 md:h-screen bg-[#0a192f]'>
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl inline font-semibold border-b-4 border-sky-600'>Projects</p>
                <p className='py-4'> These are some of my projects:</p>
            </div>
            <div    
             className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                <div style={{backgroundImage:`url(${expertacademia})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex flex-col justify-center items-center mx-auto content-div'>
                    {/* Hover-effects */}
                    <div className='opacity-0 text-center group-hover:opacity-100'>
                        <span className='text-2xl font-bold  text-white tracking-wider'>
                        Expert Academia Portal
                        </span>
                        <div className='pt-8'>
                        <a target='_blank' href='https://github.com/Moavia-00/Expert-Academia-Portal'>
                            <button className='text-center bg-sky-800 rounded-md px-4 py-2 '>Code <FaGithub className='inline'/> </button>
                        </a>
                        </div>
                    </div>

                    
                   
                </div>
                <div style={{backgroundImage:`url(${patientdoctor})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex flex-col justify-center items-center mx-auto content-div'>
                    {/* Hover-effects */}
                    <div className='opacity-0 text-center group-hover:opacity-100'>
                        <span className='text-2xl font-bold  text-white tracking-wider'>
                        Patient Doctor Appointment System
                        </span>
                        <div className='pt-8'>
                        <a target='_blank' href='https://github.com/Moavia-00/Patient-Doctor-Appointment-System'>
                            <button className='text-center bg-sky-800 rounded-md px-4 py-2 '>Code <FaGithub className='inline'/> </button>
                        </a>
                        </div>
                    </div>

                    
                   
                </div>
                <div style={{backgroundImage:`url(${datastructure})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex flex-col justify-center items-center mx-auto content-div'>
                    {/* Hover-effects */}
                    <div className='opacity-0 text-center group-hover:opacity-100'>
                        <span className='text-2xl font-bold  text-white tracking-wider'>
                        Data Structure Visulizer
                        </span>
                        <div className='pt-8'>
                        <a target='_blank' href='https://github.com/Moavia-00/Data-Structure-Visulizer'>
                            <button className='text-center bg-sky-800 rounded-md px-4 py-2 '>Code <FaGithub className='inline'/> </button>
                        </a>
                        </div>
                    </div>

                    
                   
                </div>
            </div>
        </div>

    </div>
  )
}

export default Projects