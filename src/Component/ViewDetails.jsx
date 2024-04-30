import { Link } from "react-router-dom";
import { SlLocationPin } from "react-icons/sl";
import { Helmet } from "react-helmet-async";


const ViewDetails = ({detail}) => {
    const{image,spotname,cost,countryname,description,location,season,time,visitor,_id}=detail
    const desc = (desc)=>{
      const words = desc.split(' ');
      const newWords = words.slice(0,25);
      return newWords.join(' ')
    }
    const newdesc = desc(description)
    return (
        <div className="">
          <Helmet>
                <title>
                    Countries
                </title>
            </Helmet>
            <div className="card h-[800px] w-[350px] lg:w-[400px] mx-auto bg-base-100 shadow-xl">
  <figure><img src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Spot Name : {spotname}</h2>
    <h2 className="card-title">Country Name : {countryname}</h2>
    <h2 className="card-title"><SlLocationPin />  {location}</h2>
    <h2 className="card-title">Average Cost :   {cost}</h2>
    <h2 className="card-title">Seasonality :   {season}</h2>
    <p className="card-title">Description : {newdesc}...</p>
    <div className="">
      <Link to={`/details/${_id}`}><button className="btn bg-[green] text-white w-full">view details</button></Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default ViewDetails;