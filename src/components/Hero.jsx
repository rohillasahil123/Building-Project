import { Navigate, useNavigate } from 'react-router-dom';
import data from '/data/data.js';
import { FaWhatsapp } from "react-icons/fa";

const Hero = () => {
      

    const handelcontect = ()=>{
        Nevigate("/contect")
    }

    const Nevigate = useNavigate()




    return (
        <>
        <hr />
          <div className='flex justify-center mx-auto ' >
                <h1 className='text-5xl font-bold '>Our Populer <span className='text-orange-600'>Office</span></h1>
            </div>  <hr className='mt-5' />
        <div className='justify-center mx-auto ml-[100px] mt-11 '>
          
            {data.map(item => (
                <div key={item.id} className="border p-4 mb-4 shadow-md h-[300px] w-[80%] flex justify-between rounded-lg space-x-11">
                    <div className='h-full w-[40%]'>
                    <img src={item.image} alt={item.location} className="w-full h-full object-cover mb-4" />
                    </div>
                    <div>
                    <h2 className="text-2xl font-bold">{item.location}</h2>
                    <p className="text-lg">{item.fulladdress}</p>
                    <p className="text-lg font-semibold">{item.Price}</p>
                    <p className="text-sm">{item.area}</p>
                    <p className="text-sm mt-2">{item.subtitle}</p>
                    <div className='h-[50px] mt-9 w-full bg-gray-300 flex'>
                       <div>
                       <h1 className='text-xl font-bold mt-2 '>Sahil Rohilla</h1> 
                       </div>
                       <div className='ml-[300px] mt-2  h-9   text-center flex '>
                        <button><FaWhatsapp size={30} className='transition duration-500 ease-in-out hover:bg-green-600 w-[80px] h-[35px] rounded-md text-center hover:cursor-pointer hover:text-white'/></button>
                         <div className='ml-[100px] transition duration-500 ease-in-out hover:bg-blue-600 w-[80px] h-[35px] rounded-md text-center hover:cursor-pointer hover:text-white text-[20px] ' onClick={handelcontect}>Contact</div>
                       </div>
                    </div>
                    </div>
                </div>
            ))}
        </div>
        </>
    );
}

export default Hero;
