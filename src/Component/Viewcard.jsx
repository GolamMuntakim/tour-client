import { useEffect, useState } from "react";
import {  useParams } from "react-router-dom";


const Viewcard = () => {
    // const detail = useLoaderData()
    // console.log(detail)
    const [viewcard, setViewcard] = useState([])
    console.log(viewcard)
    const {image,spotname} = viewcard
    const {id}=useParams()
    useEffect(()=>{
        fetch(`http://localhost:5000/details/${id}`)
        .then(res=>res.json())
        .then(data=>{
            setViewcard(data)
            console.log(data)
        })
    },[id])
    return (
        <div className="">
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes"/></figure>
                <div className="card-body">
                    <h2 className="card-title">{spotname}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                </div>
            </div>
           
        </div>
    );
};

export default Viewcard;