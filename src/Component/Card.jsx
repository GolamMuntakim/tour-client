import { Link } from "react-router-dom";
import { MdAttachMoney } from "react-icons/md";
import { MdAccessTime } from "react-icons/md";
import { Helmet } from "react-helmet-async";

const Card = ({all}) => {
    const  {name, image,countryname,cost, time,email, _id,spotname, location,season, visitor, description} = all;
    return (
        <div>
           
        <div className="card h-[500px]  bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" className="h-[300px] w-full" /></figure>
            <div className="card-body">
                <h2 className="card-title">Tourist Spot Name : {spotname}</h2>
                <p className="flex justify-between">
                    <span className="flex gap-2 items-center"><MdAttachMoney />  {cost}</span>
                    <span className="flex gap-2 items-center"><MdAccessTime /> {time} days</span>
                    </p>
               
                <p className="flex gap-2 items-center">Total Visitor per year :  {visitor}</p>
                <p> Seasonality : {season}</p>
                <div className="">
                   <Link to={`/details/${_id}`}> <button className="btn bg-[green] text-white w-full">View Details</button></Link>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Card;