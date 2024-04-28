import { Link, useLoaderData } from "react-router-dom";
import CountryCard from "./CountryCard";
import { useEffect, useState } from "react";


const Countries = () => {
       const [countries, setCountries] = useState([])
       console.log(countries)
       
       console.log(countries)

       useEffect(()=>{
        fetch('http://localhost:5000/country')
        .then(res=>res.json())
        .then(data=>setCountries(data))
       },[])
    return (
        <div>
            <h1 className="text-4xl font-bold text-center mt-8">Countries</h1>
           
            <div className='grid grid-cols-3 mt-8 gap-4'>
           {
                countries.map(country=><CountryCard key={country._id} country={country}></CountryCard>)
            }
           </div>
        </div>
    );
};

export default Countries;