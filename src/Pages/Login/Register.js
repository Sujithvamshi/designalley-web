import React from 'react'
import {HiCheckCircle,HiOutlineCheckCircle, HiOutlineArrowNarrowRight} from 'react-icons/hi'
function Register() {
  return (
    <div className=' min-h-screen flex flex-col justify-center items-center'>
        <p className='font-bold'>Registration Details :</p>
        <div className='w-screen flex justify-center items-center'>
            <HiCheckCircle />
            <hr className='bg-black mx-2 w-1/4'/>
            <HiCheckCircle />
            <hr className='bg-black mx-2 w-1/4'/>
            <HiCheckCircle />
        </div>
        <div className="flex flex-col justify-center">
            <p className="mt-4 mb-2">Name</p>
            <input placeholder='Name' className="bg-gray-300 w-72 text-center p-2 text-sm rounded-sm placeholder:text-left"></input>
            <p className="mt-4 mb-2">Email ID</p>
            <input placeholder='Email Id' className="bg-gray-300 w-72 text-center p-2 text-sm rounded-sm placeholder:text-left"></input>
            <p className="mt-4 mb-2">Contact</p>
            <input placeholder='Contact' className="bg-gray-300 w-72 text-center p-2 text-sm rounded-sm placeholder:text-left"></input>
            <div className='flex justify-center'>
                <button className="bg-[#be9682] w-min my-6 text-white text-lg rounded-sm px-3 py-1 flex items-center">
                    <p className="mx-6">Next</p><HiOutlineArrowNarrowRight />
                </button>
            </div>
        </div>
    </div>
  )
}

export default Register