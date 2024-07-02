import { useLoaderData } from "react-router-dom";

import Card from "./Card";
import { useState } from "react";
import UseAuth from "./UseAuth";
import { Helmet } from "react-helmet-async";




const All = () => {
    
    const spot = useLoaderData()
    // console.log(spot)
   const [sortedSpot, setSortedSpot] = useState([...spot]);
   const [sortDirection , setSortDirection] = useState('desc');
   
   const sortByCost = ()=>{
    const sorted = [...spot].sort((a,b)=>{
        if(sortDirection === 'desc'){
            return b.cost - a.cost;
        }else{
            return a.cost - b.cost
        }
    })
    setSortedSpot(sorted)
    setSortDirection(sortDirection === 'desc'? 'asc' : 'desc')
   }
  
    return (
        <div>
             <Helmet>
                <title>
                    All Tourist Spot
                </title>
            </Helmet>
            <div className="mt-20">
                <div className="flex justify-center">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn m-1" >Sort By Difficulty level</div>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                            <li onClick={sortByCost}><a>sort By average cost</a></li>
                        </ul>
                    </div>
                </div>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-8 gap-4 w-[300px] lg:w-[1200px] mx-auto'>
                    {
                        sortedSpot.map(all => <Card key={all._id} all={all}></Card>)
                    }
                </div>
            </div>
        </div>
    );
};

export default All;