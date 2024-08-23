import React from 'react'
import office from '../assets/offfice.jpg'
import contect_image from '../assets/ben1.jpg'
import Header from './Header'
import Footer from './Footer'

const Contect = () => {
  return (
    <>
     
      <Header/>
      <div className='flex justify-center mx-auto items-center   bg-gray-200 h-[90vh] w-[100]  '>
        <div className='w-[30%] h-[70vh] border bg-white shadow-2xl text-4xl text-emerald-950 font-bold  relative rounded-md'>
          <h1 className='ml-[160px] mt-7' >Contact Us</h1></div>
        <div className='w-[30%] h-[70vh] border relative'>
          <img src={office} alt="" className='object-cover h-full w-full ' />
        </div>
      </div>

      <div className=' rounded-lg absolute top-[38%]  h-[50vh] w-[20%] border bg-red-200 ml-[270px] justify-center text-center shadow-md   '>

      <img  src={contect_image} className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center ml-[100px] mt-2" />


        <div className='mt-2 '>
          <input type="text" className='rounded-sm ml-4 p-1 w-[80%] ' placeholder='Enter email'/>
        </div>
        <div className='mt-2'>
          <textarea name="" className='ml-4 w-[80%] h-[100px]' placeholder='Enter your querry ' id=""></textarea>
        </div>
        <div className='ml-4'>
          <button type="button" className='h-8 rounded bg-blue-600 font-semibold text-white w-[85%] hover:bg-blue-900'> Send</button>
        </div>
        
      </div>
      <div className=' absolute top-[38%] shadow-xl  h-[50vh] w-[20%] border rounded-md  bg-white ml-[550px] '>
        <h1 className='text-center mt-9 font-semibold text-2xl'>Product and <br /> account support</h1>
        <button className='h-[40px] font-semibold w-[80%] bg-slate-400 rounded-md ml-7 mt-9 hover:bg-slate-800 hover:text-white'>Go to help</button>
         </div>
         <Footer/>
    </>
    
  )
}

export default Contect
