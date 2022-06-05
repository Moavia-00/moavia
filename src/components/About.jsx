import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
            <div className='sm:text-right pb-8 '>
                <p className='text-5xl font-semibold border-b-4 border-sky-500 inline'>About</p>
            </div>
            <div></div>
        </div>
        <div className='max-w-[1000px w-full px-4 grid sm:grid-cols-2 gap-8 '>
            <div className='sm:text-right text-4xl font-bold'>
                <p>Hi, I'm Moavia. please take a look around</p>
            </div>
            <div>
                <p>
                    I am passionate about building excellent Web Apps that improves the lives around 
                    me. I have deep interest in web technologies, always eager to learn new technologies

                </p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default About