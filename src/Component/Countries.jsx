import { Link, useLoaderData } from "react-router-dom";
import CountryCard from "./CountryCard";
import { useEffect, useState } from "react";


const Countries = () => {
       const [countries, setCountries] = useState([])
       console.log(countries)
       
       console.log(countries)

       useEffect(()=>{
        fetch('https://tour-server-ten.vercel.app/country')
        .then(res=>res.json())
        .then(data=>setCountries(data))
       },[])
    return (
        <div>
            <h1 className="text-4xl font-bold text-center mt-8">Countries</h1>
           
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8 gap-4 lg:w-[1200px] mx-auto'>
           {
                countries.map(country=><CountryCard key={country._id} country={country}></CountryCard>)
            }
           </div>
        </div>
    );
};

export default Countries;