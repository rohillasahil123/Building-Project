import React from 'react'
import { Link } from 'react-router-dom'

const ForgetPassword = () => {
  return (
 
            <div className=' flex justify-center mx-auto   '>
                <Link to='/forgetpassword'></Link>
                <div className='flex flex-col items-center  h-[500px] w-[30%] rounded-xl mt-11 border shadow-lg '>
                        <h1 className='text-3xl font-bold mt-[70px]'>Reset Your Password</h1> 
                            {/* <img src={avtar} className=' rounded-full h-[100px] mt-7' /> */}
                            <p className='text-gray-500'>Please fill your's password </p>
                        <div className='w-[100%] text-center mt-[70px] '>
                            <input type="text" placeholder='new password'
                            className='h-9 w-[70%] rounded border' />
                        </div>
                        <div className='w-[100%] text-center mt-3  '>
                            <input type="text" placeholder='confrom password'
                            className='h-9 w-[70%] rounded border' />
                        </div>
                        <div className='w-[100%] text-center mt-4 '>
                        <button className='bg-blue-700 w-[70%] h-11 font-semibold text-xl rounded-md text-white'>Recovery</button>
                        </div>
    
                         <p className='mt-3'> <span className='text-red-600 hover:cursor-pointer'>   <Link to='/recovery'> Try another way</Link></span></p>
                </div>
    
            </div>
        )
    }

export default ForgetPassword
