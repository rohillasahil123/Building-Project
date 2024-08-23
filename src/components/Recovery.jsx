import React from 'react'
import { Link } from 'react-router-dom'

const Recovery = () => {
  return (
    
     
                <div className=' flex justify-center mx-auto   '>
                    <Link to='/recovery'></Link>
                    <div className='flex flex-col items-center  h-[500px] w-[30%] rounded-xl mt-11 border shadow-lg '>
                            <h1 className='text-3xl font-bold mt-[70px]'>Enter Your Email</h1> 
                                {/* <img src={avtar} className=' rounded-full h-[100px] mt-7' /> */}
                                <p className='text-gray-500 mt-3'>Enter Your email here</p>
                            <div className='w-[100%] text-center mt-[70px] '>
                                <input type="text" placeholder='enter email'
                                className='h-9 w-[70%] rounded border' />
                            </div>
                            <div className='w-[100%] text-center mt-4 '>
                            <button className='bg-blue-700 w-[70%] h-11 font-semibold text-xl rounded-md text-white'>Send Request</button>
                            </div>
        
                             <p className='mt-3'> don't give OTP <span className='text-red-600 hover:cursor-pointer'>  <Link to='/forgetpassword'>resend OTP</Link></span></p>
                    </div>
        
                </div>
            )
        } 
export default Recovery
