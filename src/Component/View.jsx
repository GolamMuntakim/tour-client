import { useEffect, useState } from "react";
import ViewDetails from "./ViewDetails";
import { useParams } from "react-router-dom";


const View = () => {
    // const { id } = useParams()
    const {id,countryname} = useParams()
     console.log(id,countryname)
    const [details, setDetails] = useState([])
    // console.log(details)
    useEffect(() => {
        fetch(`https://tour-server-ten.vercel.app/viewdetail/${id}`)
            .then(res => res.json())
            .then(data => {
                setDetails(data)
                console.log(data)
            })
    }, [id])
    // const filteredCard = details.filter(detail=> detail.countryname === detail.countryname)
    // console.log(filteredCard)
    return (
        <>
            < div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[350px] md:w-[400px] lg:w-[1200px] mx-auto gap-4">
              
                {
                    details.map(detail => <ViewDetails key={detail._id} detail={detail}></ViewDetails>)
                }
            </div>
        </>
    );
};

export default View;