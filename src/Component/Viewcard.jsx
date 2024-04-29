import { useEffect, useState } from "react";
import {  useParams } from "react-router-dom";
import UseAuth from "./UseAuth";


const Viewcard = () => {
    // const detail = useLoaderData()
    // console.log(detail)
    const {user} = UseAuth()
    console.log(user)
    const [viewcard, setViewcard] = useState([])
    // console.log(viewcard)
    const {image,spotname,cost,countryname,description,location,season,time,visitor} = viewcard
    const {id}=useParams()
    useEffect(()=>{
        fetch(`https://tour-server-ten.vercel.app/details/${id}`)
        .then(res=>res.json())
        .then(data=>{
            setViewcard(data)
            console.log(data)
        })
    },[id])
    return (
        <div className="">
          <section>
	<div className="bg-green-950">
		<div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 text-gray-900">
			<h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl text-white">Explore The World With Us</h1>
			<p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl text-white">We are providing the best travel management system for you</p>
			<div className="flex flex-wrap justify-center">
				<button type="button" className="btn border-none px-8 py-3 m-2 text-lg font-semibold rounded bg-gray-800 text-gray-50">Contact with us</button>
				<button type="button" className="btn bg-green-400 border-none px-8 py-3 m-2 text-lg border rounded  text-white">Check spot</button>
			</div>
		</div>
	</div>
	<img src={image} alt="" className="w-5/6 mx-auto mb-12 -mt-20 bg-gray-500 rounded-lg shadow-md lg:-mt-40 bg-cover" />
</section>

<div className="w-[1100px] mx-auto">
<div className=" p-6 overflow-hidden rounded-lg shadow dark:bg-gray-50 dark:text-gray-800">
	<article>
		<h2 className="text-xl font-bold">Country : {countryname}</h2>
		<h2 className="text-xl font-bold">Spot Name : {spotname}</h2>
        <p>Location : {location}</p>
        <p>Seasonality : {season}</p>
        <p>Estimited Time To Reach the Place : {time} days</p>
        <p>Cost : {cost}</p>
		<p className="mt-4 dark:text-gray-600">Description : {description}</p>
		<div className="flex items-center mt-8 space-x-4">
			<img src={user.photoURL} alt="" className="w-10 h-10 rounded-full dark:bg-gray-500" />
			<div>
				<h3 className="text-sm font-medium">{user.displayName}</h3>
				<h3 className="text-sm font-medium">{user.metadata.creationTime}</h3>
			</div>
		</div>
	</article>
</div>
</div>
           
        </div>
    );
};

export default Viewcard;