import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";


const Home = () => {

    const imagesData = [
        {
            url: "src/assets/office.webp"
        }, {
            url: "src/assets/office1.webp"
        }, {
            url: "src/assets/office2.jpg"
        },
    ]
    const [slider, setSlider] = useState(0)


    const handelleft = () => {
        setSlider(slider === 0 ? imagesData.length - 1 : slider - 1)
    }
    const handelright = () => {
        setSlider(slider ===  imagesData.length - 1 ? 0 : slider + 1)
    }

    useEffect(()=>{
        const timer = setInterval (()=>{
            handelright();
        },2000)
        return ()=>{
            clearInterval(timer)
        }
    },[slider])


    return (<>
        <Header />
        <div className='mt-[10px]'>
           
            <div className='w-[90%] mx-auto h-[80vh] my-5 relative' >
                {
                    imagesData.map((item, i) => (
                        <div key={i} className={`${slider === i ? "block" : "hidden"}`} >
                            <img
                                src={item.url}
                                className='w-full h-[80vh] rounded-2xl object-cover '
                            />

                        </div>
                    ))}

                <div className='w-full mx-auto h-[80vh] bg-black opacity-10 absolute top-0 left-0 rounded-2xl' ></div>
                <div className='flex justify-center mx-auto w-full font-bold text-5xl  absolute top-[30%] ' > <p className='text-rose-800'> This is Our Building <span className='text-blue-950'> Office</span> </p></div>
                <div className='flex absolute top-[50%] justify-between w-full px-5 '>
                    <FaArrowAltCircleLeft size={30} onClick={handelleft} />
                    <FaArrowAltCircleRight size={30} onClick={handelright} />
                </div>
            </div>
        </div>
    </>
    )
}

export default Home

