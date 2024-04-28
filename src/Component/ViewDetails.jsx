import { Link } from "react-router-dom";


const ViewDetails = ({detail}) => {
    const{_id,image,countryname}=detail
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{countryname}</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <Link to={`/details/${_id}`}><button className="btn btn-primary">view details</button></Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default ViewDetails;