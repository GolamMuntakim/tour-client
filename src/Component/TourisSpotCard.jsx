
import { Link } from "react-router-dom";
import { MdAttachMoney } from "react-icons/md";
import { MdAddLocationAlt } from "react-icons/md";


const TourisSpotCard = ({place}) => {
    
    const  {name, image,countryname,cost, time,email, spotname, location,season, visitor, description,_id} = place;
  
    return (
        <div>
            <div className="card h-[500px] bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes"/></figure>
                <div className="card-body">
                    <h2 className="card-title">Spot Name : {spotname}</h2>
                    <p>Country : {countryname}</p>
                    <p className="flex items-center justify-start"><MdAttachMoney /> {cost}</p>
                    <p className="flex items-center justify-start"><MdAddLocationAlt /> {location}</p>
                    <div className="w-full ">
                       <Link to={`/details/${_id}`}><button className="btn bg-[green] text-white w-full">View Details</button></Link>
                    </div>
                </div>
            </div>
           
        </div>
    );
};

export default TourisSpotCard;