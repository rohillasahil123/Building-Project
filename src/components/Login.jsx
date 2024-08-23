import { useState  } from 'react'
import avtar from '../assets/userlogin.png'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast'

const Login = () => {

    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    })

    const navigate = useNavigate();
  

    const handelChange = (e) => {
        setLoginData({ ...loginData, [e.target.name]: e.target.value })
    }

    const handelClick = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post("http://localhost:5000/api/login", loginData)
            toast.success("Login SuccessFully", response.data)
            navigate('/home');

        } catch (error) {
            toast.error("login failed ", )
        }
    }

    return (
        <div className=' flex justify-center mx-auto   '>
            <Link to='/'></Link>
            <div className='flex flex-col items-center  h-[500px] w-[30%] rounded-xl mt-11 border shadow-lg '>
                <h1 className='text-3xl font-bold mt-7'>Login Form</h1> <hr className='w-[100%] mt-2' />

                <img src={avtar} className=' rounded-full h-[150px] mt-7' />

                <div className='w-[100%] text-center mt-4 '>
                    <input type="text" placeholder='enter email' autoComplete='off' name='email' onChange={handelChange}
                        className='h-9 w-[70%] rounded border' />
                </div>
                <div className='w-[100%] text-center mt-4 '>
                    <input type="text" placeholder='enter password' autoComplete='off' name='password' onChange={handelChange}
                        className='h-9 w-[70%] rounded border' />
                </div>
                <div className='w-[100%] text-center mt-4 '>
                    <button className='bg-blue-700 w-[70%] h-11 font-semibold text-xl rounded-md' onClick={handelClick}>Login-Here</button>
                </div>

                <p className='mt-3'><Link to='/recovery'>Forgeten Password?</Link><span className='text-red-600 hover:cursor-pointer'> <Link to='/register '> Not a member?</Link>  </span></p>
            </div>

        </div>
    )
}

export default Login
