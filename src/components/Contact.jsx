import React from 'react'

import { HiMail} from 'react-icons/hi'

const Contact = () => {
  return ( <>
    <div name='contact' className='bg-[#0a192f] w-full h-screen flex justify-center items-center'>
        <form  className='flex px-7 sm:px-0 flex-col max-w-[600px] w-full'>
        <div className='pb-4'>
            <p className='text-4xl inline font-semibold text-gray-300 border-b-4 border-sky-600' >Contact</p>
            <p className='text-gray-300 py-4'>Shoot me an email -moaviahassan7i8@gmail.com</p>
        </div>
        <input className='p-2 bg-sky-800' type="text" name='name' placeholder='Enter Your name' />
        <input className='my-2 p-2 bg-sky-800' type="email" name='email' placeholder='email Address' />
        <textarea className='message p-2  bg-sky-800' placeholder='Write some message..' rows={8}></textarea>
        <button className='bg-sky-800 flex mx-auto text-center items-center px-4 py-2 text-gray-300  my-2'>Send me! <HiMail className='ml-2'/> </button>
        </form>
       
    </div>
     <div className='flex justify-center pb-3 -mt-5 text-gray-400'>
     <h1>Made with❤️️By Moavia00</h1>
    </div>
    </>
  )
}

export default Contact