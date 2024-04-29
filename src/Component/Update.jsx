import { useParams } from "react-router-dom";
import UseAuth from "./UseAuth";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";


const Update = () => {
    const {user } = UseAuth()
    const {id} = useParams()
    console.log(id)
    // console.log(user)
    const [place, setPlace] = useState({})
    const handleUpdate = e =>{
        e.preventDefault();
        const form = e.target;
        const name= form.name.value
        const image = form.image.value;
        const countryname = form.countryname.value;
        const cost = form.cost.value;
        const time = form.time.value;
        const spotname = form.spotname.value;
        const location = form.location.value;
        const season = form.season.value;
        const visitor = form.visitor.value;
        const description = form.description.value;
        const usermail = user.email
        const updateinfo = { image,countryname,cost, time, spotname, location,season, visitor, description,usermail,name }
        console.log(updateinfo)
        fetch(`https://tour-server-ten.vercel.app/update/${id}`,{
            method:"PUT",
            headers:{"content-type": "application/json"},
            body:JSON.stringify(updateinfo)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.modifiedCount>0){
                Swal.fire({
                    title: 'success!',
                    text: 'Spot Updated sucssesfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
    }
   
    useEffect(()=>{
        fetch(`https://tour-server-ten.vercel.app/singleplace/${id}`)
        .then(res => res.json())
        .then(data => {
            setPlace(data)
            console.log(data)
           
        })
    },[id])
    return (
        <div className="bg-base-300">
        <form onSubmit={handleUpdate}>
        <div className="flex gap-4 ml-52 ">
          <div>
          <label className="form-control w-full ">
                <div className="label">
                    <span className="label-text">name</span>
                </div>
                <input type="text" name="name" placeholder="give your name" className="input input-bordered w-full " required/>
            </label>
          <label className="form-control w-full ">
                <div className="label">
                    <span className="label-text">Image Url</span>
                </div>
                <input type="text" name="image" placeholder="give your Image Url" className="input input-bordered w-full " required/>
            </label>
            <label className="form-control w-full ">
                <div className="label">
                    <span className="label-text">Country Name</span>
                </div>
                <input type="text" name="countryname" placeholder="give your country name" className="input input-bordered w-full " required/>
            </label>
            <label className="form-control w-full ">
                <div className="label">
                    <span className="label-text">Average Cost</span>
                </div>
                <input type="text" name="cost" placeholder="average cost" className="input input-bordered w-full " required/>
            </label>
            <label className="form-control w-full ">
                <div className="label">
                    <span className="label-text">Travel Time</span>
                </div>
                <input type="text" name="time" placeholder="Time" className="input input-bordered w-full " required/>
            </label>
          </div>
          <div>
          
            <label className="form-control w-full">
                <div className="label">
                    <span className="label-text">Tourist Spot Name</span>
                </div>
                <input type="text" name="spotname" placeholder="give touris spot name" className="input input-bordered w-full " required/>
            </label>
            <label className="form-control w-full">
                <div className="label">
                    <span className="label-text">Location</span>
                </div>
                <input type="text" name="location" placeholder="give your location" className="input input-bordered w-full " required/>
            </label>
            <label className="form-control w-full">
                <div className="label">
                    <span className="label-text">Season</span>
                </div>
                <input type="text" name="season" placeholder="Season" className="input input-bordered w-full " required/>
            </label>
            <label className="form-control w-full">
                <div className="label">
                    <span className="label-text">Total visitor</span>
                </div>
                <input type="text" name="visitor" placeholder="visitor" className="input input-bordered w-full " required/>
            </label>
          </div>
          
        </div>
        <div className="ml-52 mr-52">
        <label className="form-control w-full ">
                <div className="label">
                    <span className="label-text">Descriptio</span>
                </div>
                <input type="text" name="description" placeholder="Type here" className="input input-bordered w-full " required/>
            </label>
        </div>
        <div className="ml-52 mr-52 mt-4" >
        <input className="btn btn-success w-full text-white" type="submit" value="update"/>
        </div>
        </form>
        </div>
    );
};

export default Update;