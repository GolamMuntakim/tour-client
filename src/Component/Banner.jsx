import Lottie from 'lottie-react';
import car from './car.json'
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import plan from './plan.json'
import plan2 from './plan2.json'


const Banner = () => {
    const [text]= useTypewriter({
        words:['Destination', 'Place', 'Tour spot'],
        loop:{},
        typeSpeed:100,
        deleteSpeed:50,
    });
    return (
        <div className='flex justify-around  items-center bg-green-400 m-auto w-[1200x] rounded-xl p-10 h-[400px]'>
            <div className=''>
                <h1 className='text-white mb-2 font-extrabold text-4xl'>Explore The Word</h1>
                <h1 className='text-white mb-2 font-bold text-3xl overflow-hidden'>Choose The Best 
                <span> {text}</span>
                <span className='text-red-500'><Cursor/></span>
                </h1>
                <button className="btn bg-black text-white rounded-full border-none">Contact us now <Lottie className='w-8' animationData={plan2}/></button>
            </div>
            <div className=' w-56'>
            <Lottie animationData={car}></Lottie>
            </div>
            
        </div>
    );
};

export default Banner;