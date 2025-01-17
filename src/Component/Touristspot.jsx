
import { useLoaderData } from 'react-router-dom';
import TourisSpotCard from './TourisSpotCard';
const Touristspot = () => {
    const spot= useLoaderData().slice(0,6)
    return (
        <div>
            <h1 className='text-4xl font-bold text-center mt-8'>Tourist Spot</h1>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8 gap-4  lg:w-[1200px] mx-auto'>
           {
                spot.map(place=><TourisSpotCard key={place._id} place={place}></TourisSpotCard>)
            }
           </div>
        </div>
    );
};

export default Touristspot;