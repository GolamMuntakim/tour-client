import { Navigate, useLocation } from "react-router-dom";
import UseAuth from "./UseAuth";


const PrivateRoute = ({children}) => {
    const {user,loading}= UseAuth()
    const location = useLocation()
    if(loading){
        return <div className="flex justify-center items-center"><span className="loading loading-bars loading-lg"></span></div>
      }
    if(!user){
        return <Navigate to="/login" state={location?.pathname || '/'}/>
    }
    return (
        <div>
            {children}
        </div>
    );
};

export default PrivateRoute;