
import { Link } from "react-router-dom";
import UseAuth from "./UseAuth";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";


const UpdatePlace = () => {
    const {user,loading} = UseAuth()
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
    if(loading){
      return <div className="flex justify-center items-center"><span className="loading loading-bars loading-lg"></span></div>
    }
    
    const handleDelete = (id)=>{
        fetch(`https://tour-server-ten.vercel.app/delete/${id}`,{
            method:"DELETE",
        })
        .then((res)=> res.json())
        .then((data)=>{
            if(data.deletedCount>0 || data.deletedCount===0){
              Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
              }).then((result) => {
                if (result.isConfirmed) {
                  setControl(!control)
                  Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                  });
                 
                }
              });
               
            }
            console.log(data)
        })
    }
   
    return (
        <div className="overflow-x-auto ">
        <table className="lg:table w-[360px] lg:w-full  ">
          {/* head */}
          <thead className="border border-red-500 ">
            <tr className="">
              <th className="hidden lg:flex"></th>
              <th>Name</th>
              <th>Place</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody className="">
            {
                item.map((table,idx)=> (
                    <tr key="table._id">
              <th className="hidden lg:flex">{idx}</th>
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