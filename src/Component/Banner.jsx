import Lottie, { LottiePlayer } from 'lottie-react';
import car from './car.json'
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import plan from './plan.json'
import plan2 from './plan2.json'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import couple from './couple.json'
import summer from './summer.json'
import family from './family.json'


const Banner = () => {
    const [text]= useTypewriter({
        words:['Destination', 'Place', 'Tour spot'],
        loop:{},
        typeSpeed:100,
        deleteSpeed:50,
    });
    return (
        <div className="w-[350px] md:w-[400px] lg:w-[1200px] mx-auto">
        <div className='flex lg:flex-row flex-col justify-around  items-center bg-green-400  lg:w-[800x] mx-auto rounded-xl p-10 h-[500px] lg:h-[400px] '>
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
        {/* discount swiper */}
        <div className="mt-8">
            <h1 className="text-center text-3xl font-extrabold ">Spacial Discount For Bangladeshi Spot</h1>
          <div className="mx-auto lg:w-[800px] w-[370px]  mt-8">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                delay:2500,
                disableOnInteraction:false,
            }}
            pagination={{
                clickable:true,
            }}
            modules={[Autoplay, Pagination]}
            >
                 <SwiperSlide>
                <div className="slide slide1 text-black lg:text-4xl font-bold bg-[url('/image/sundarban.avif')] bg-center bg-no-repeat bg-cover  h-96 lg:w-[800px] w-[400px] rounded-lg flex justify-center items-center gap-8">
                    <h1 className="text-black">50% discount for couple</h1>
                    <h1><Lottie className="h-32 w-32 " animationData={couple}/></h1>
                </div>
                </SwiperSlide>
                 <SwiperSlide>
                <div className="slide slide1 text-black lg:text-4xl font-bold bg-[url('/image/cox.avif')] bg-center bg-no-repeat bg-cover h-96 w-[400px] lg:w-[800px] rounded-lg flex justify-center items-center gap-8">
                    <h1 className="text-black">20% summer discount</h1>
                    <h1><Lottie className="h-32 w-32 " animationData={summer}/></h1>
                </div>
                </SwiperSlide>
                 <SwiperSlide>
                <div className="slide slide1 text-black lg:text-4xl font-bold bg-[url('/image/saintmartin.avif')] bg-center bg-no-repeat bg-cover h-96 w-[400px] lg:w-[800px] rounded-lg flex justify-center items-center gap-8">
                    <h1 className="text-black">40% disount for family</h1>
                    <h1><Lottie className="h-32 w-32 " animationData={family}/></h1>
                </div>
                </SwiperSlide>
            </Swiper>
          </div>
           
        </div>
        </div>
    );
};

export default Banner;