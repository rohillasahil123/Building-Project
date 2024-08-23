import React from 'react'
import { Link } from 'react-router-dom'
import { CiSearch } from "react-icons/ci";

const Header = () => {
    return (
        <>
            <div className='flex justify-between text-xl h-[60px] bg-gray-800 text-center  '>
                <div className='text-3xl font-bold ml-8 mt-2 drop-shadow-xl text-white'>Frinds <span className='text-orange-600' > Site</span></div>
                <div className='flex space-x-1  mt-3 font-semibold  text-white hover:cursor-pointer text-[15px] '>
                    {/* <div><input type="text" className='h-[30px] w-[200px] rounded relative ' placeholder='Search area'/> </div>
                    <div><CiSearch className='text-2xl relative '/></div> */}
                    <div className='transition duration-500 ease-in-out hover:bg-orange-800 w-[60px] h-[35px] rounded-md text-center'> <Link to='/home'>Home</Link></div>
                    <div className='transition duration-500 ease-in-out hover:bg-orange-800 w-[60px] h-[35px] rounded-md text-center' ><Link to="/contact">Help</Link></div>
                    <div className='transition duration-500 ease-in-out hover:bg-orange-800 w-[60px] h-[35px] rounded-md text-center'><Link to='/about'>About</Link></div>
                    <div className='transition duration-500 ease-in-out hover:bg-orange-800 w-[60px] h-[35px] rounded-md text-center'><Link to='/'>Logout</Link></div>
                </div>
            </div>
        </>
    )
}

export default Header
