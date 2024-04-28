import { Link } from "react-router-dom";


const Card = ({all}) => {
    const  {name, image,countryname,cost, time,email, _id,spotname, location,season, visitor, description} = all;
    return (
        <div>
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{spotname}</h2>
                <p>{countryname}</p>
                <div className="card-actions justify-end">
                   <Link to={`/details/${_id}`}> <button className="btn btn-primary">View Details</button></Link>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Card;