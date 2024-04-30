import { Link } from "react-router-dom";


const CountryCard = ({country}) => {
    const {image,countryname,_id,description} = country
    return (
        <Link to={`/viewdetail/${countryname}`} className="card w-[350px] lg:w-[400px] mx-auto bg-base-100 shadow-xl">
        <figure><img src={image} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{countryname}</h2>
          <p>{description}</p>
          {/* <div className="card-actions justify-end">
            <Link to={`/viewdetail/${_id}`}><button className="btn btn-primary">View details</button></Link>
          </div> */}
        </div>
      </Link>
    );
};

export default CountryCard;