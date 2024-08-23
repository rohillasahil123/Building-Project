import React, { useState } from 'react'
import axios from "axios"
import avtar from '../assets/userlogin.png'
import { Link ,  useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

const Registration = () => {
    const [register, setRegister] = useState({
        username: "",
        email: "",
        password: ""
    })
    const navigate = useNavigate()


    const handleChange = (e) => {
        setRegister({ ...register, [e.target.name]: e.target.value })
    
    }

    const handelClick = async (e) => {
        e.preventDefault()
        const { username , email , password} = register
        if(!username || !email || !password){
            toast.error("Please fill all the fields")
        }
        try {
            const result = await axios.post("http://localhost:5000/api/register", register)
            toast.success("register Sussecfully", result.data)
            setRegister({
                username: "",
                email: "",
                password: ""
            })
            navigate("/")

        } catch (error) {
            toast.error("User already exist")
        }

    }
    return (
        <div className=' flex justify-center mx-auto   '>
            <Link to='/register'></Link>
            <div className='flex flex-col items-center  h-[500px] w-[30%] rounded-xl mt-11 border shadow-lg '>
                <h1 className='text-3xl font-bold mt-7'>Register-Here</h1> <hr className='w-[100%] mt-2' />

                <img src={avtar} className=' rounded-full h-[100px] mt-7' />
                <div className='w-[100%] text-center mt-4 '>
                    <input type="text" placeholder='enter username' name='username' autoComplete='off' value={setRegister.username} onChange={handleChange}
                        className='h-9 w-[70%] rounded border' />
                </div>

                <div className='w-[100%] text-center mt-4 '>
                    <input type="text" placeholder='enter email' name='email' autoComplete='off' value={setRegister.email} onChange={handleChange}
                        className='h-9 w-[70%] rounded border' />
                </div>
                <div className='w-[100%] text-center mt-4 '>
                    <input type="text" placeholder='enter password' name='password' autoComplete='off' value={setRegister.password} onChange={handleChange}
                        className='h-9 w-[70%] rounded border' />
                </div>
                <div className='w-[100%] text-center mt-4 '>
                    <button className='bg-blue-700 w-[70%] h-11 font-semibold text-xl rounded-md text-white' onClick={handelClick}>Register</button>
                </div>

                <p className='mt-3'> <span className='text-red-600 hover:cursor-pointer'>   <Link to='/'>Already have an accont?</Link></span></p>
            </div>

        </div>
    )
}

export default Registration
