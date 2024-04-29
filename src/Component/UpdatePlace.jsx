
import { Link } from "react-router-dom";
import UseAuth from "./UseAuth";
import { useEffect, useState } from "react";


const UpdatePlace = () => {
    const {user} = UseAuth()
    
    const [item, setItem]= useState([])
    const [control, setControl] = useState(false)
    //  console.log(user)
    useEffect(()=>{
        fetch(`https://tour-server-ten.vercel.app/mylist/${user?.email}`)
        .then(res=>res.json())
        .then(data=>{
            setItem(data)
        })
    },[user,control])
    const handleDelete = (id)=>{
        fetch(`https://tour-server-ten.vercel.app/delete/${id}`,{
            method:"DELETE",
        })
        .then((res)=> res.json())
        .then((data)=>{
            if(data.deletedCount>0){
                setControl(!control)
            }
            console.log(data)
        })
    }
    return (
        <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Place</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {
                item.map((table,idx)=> (
                    <tr key="table._id">
              <th>{idx}</th>
              <td>{table.name}</td>
              <td>{table.spotname}</td>
              <td><Link to={`/update/${table._id}`}><button className="btn btn-accent">Update</button></Link></td>
              <td><button onClick={()=>handleDelete(table._id)} className="btn btn-square" >
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
</button></td>
            </tr>
                ))
            }
          </tbody>
        </table>
      </div>
    );
};

export default UpdatePlace;