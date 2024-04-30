import Swal from "sweetalert2";
import UseAuth from "./UseAuth";
import { useState } from "react";
import { Helmet } from "react-helmet-async";



const Addplace = () => {
    const {user } = UseAuth()
    console.log(user)
    const [selectedCountry, setSelectedCountry] = useState("")
    const handleCountryChange = e =>{
        setSelectedCountry(e.target.value)
    }
    const handleAdd = e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const image = form.image.value;
        const countryname = selectedCountry;
        const cost = form.cost.value;
        const time = form.time.value;
        const email = form.email.value;
        const spotname = form.spotname.value;
        const location = form.location.value;
        const season = form.season.value;
        const visitor = form.visitor.value;
        const description = form.description.value;
        const usermail = user.email
        const newPlaces = {name, image,countryname,cost, time,email, spotname, location,season, visitor, description,usermail}
        console.log(newPlaces)
        //send to the server 
        fetch('https://tour-server-ten.vercel.app/places',{
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body:JSON.stringify(newPlaces)
        })
        .then(res => res.json())
        .then(data=>{
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'success!',
                    text: 'Spot Adedd sucssesfully',
                    icon: 'success',
                    confirmButtonText: 'OK'
                  })
            }
        })

    }
   
    return (
        <>
         <Helmet>
                <title>
                    Add Tourist Spot
                </title>
            </Helmet>
        <div className="bg-base-300 md:mx-auto">
        <form onSubmit={handleAdd}>
        <div className="flex flex-col lg:flex-row gap-4 ml-2 lg:ml-52 ">
          <div>
          <label className="form-control w-[350px] lg:w-full ">
                <div className="label">
                    <span className="label-text">Full Name</span>
                </div>
                <input type="text" name="name" placeholder="give your full name" className="input input-bordered 
               w-[350px] lg:w-[400px]" required/>
            </label>
          <label className="form-control w-[350px] lg:w-full ">
                <div className="label">
                    <span className="label-text">Image Url</span>
                </div>
                <input type="text" name="image" placeholder="give your Image Url" className="input input-bordered w-full " required/>
            </label>
            <label className="form-control w-[350px] lg:w-full ">
                <div className="label">
                    <span className="label-text">Country Name</span>
                </div>
               <div className="w-[]">
                <select 
                className=" w-[350px] lg:w-[400px] h-[50px] rounded-lg"
                name="countryname" 
                id="select select-bordered "
                value={selectedCountry}
                onChange={handleCountryChange}>
                    <option value="">select your country</option>
                <option value="Bangladesh">Bangladesh</option>
                        <option value="Thiland">Thiland</option>
                        <option value="Indoneshia">Indoneshia</option>
                        <option value="combodia">Combodia</option>
                        <option value="Malyshia">Malyshia</option>
                </select>
               </div>
            </label>
            <label className="form-control w-[350px] lg:w-full ">
                <div className="label">
                    <span className="label-text">Average Cost</span>
                </div>
                <input type="text" name="cost" placeholder="average cost" className="input input-bordered w-full " required/>
            </label>
            <label className="form-control w-[350px] lg:w-full ">
                <div className="label">
                    <span className="label-text">Travel Time</span>
                </div>
                <input type="text" name="time" placeholder="Time" className="input input-bordered w-full " required/>
            </label>
          </div>
          <div>
          <label className="form-control w-[350px] lg:w-full ">
                <div className="label">
                    <span className="label-text">Email</span>
                </div>
                <input type="email" name="email" placeholder="give your email" className="input input-bordered 
                 w-[350px] lg:w-[400px]" required/>
            </label>
            <label className="form-control w-[350px] lg:w-full">
                <div className="label">
                    <span className="label-text">Tourist Spot Name</span>
                </div>
                <input type="text" name="spotname" placeholder="give touris spot name" className="input input-bordered w-full" required/>
            </label>
            <label className="form-control w-[350px] lg:w-full">
                <div className="label">
                    <span className="label-text">Location</span>
                </div>
                <input type="text" name="location" placeholder="give your location" className="input input-bordered w-full" required/>
            </label>
            <label className="form-control w-[350px] lg:w-full">
                <div className="label">
                    <span className="label-text">Season</span>
                </div>
                <input type="text" name="season" placeholder="Season" className="input input-bordered w-full" required/>
            </label>
            <label className="form-control w-[350px] lg:w-full">
                <div className="label">
                    <span className="label-text">Total visitor</span>
                </div>
                <input type="text" name="visitor" placeholder="visitor" className="input input-bordered w-full" required/>
            </label>
          </div>
          
        </div>
        <div className="ml-2 mr-2 lg:ml-52 lg:mr-52">
        <label className="form-control w-[350px] lg:w-full ">
                <div className="label">
                    <span className="label-text">Description</span>
                </div>
                <input type="text" name="description" placeholder="Type here" className="input input-bordered w-full " required/>
            </label>
        </div>
        <div className="ml-2 mr-2 lg:ml-52 lg:mr-52 mt-4" >
        <input className="btn btn-success w-full text-white" type="submit" value="Add Spot"/>
        </div>
        </form>
        </div>
        </>
    );
};

export default Addplace;