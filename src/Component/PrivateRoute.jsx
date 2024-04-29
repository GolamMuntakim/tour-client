import { Navigate } from "react-router-dom";
import UseAuth from "./UseAuth";


const PrivateRoute = ({children}) => {
    const {user}= UseAuth()
    if(!user){
        return <Navigate to="/" />
    }
    return (
        <div>
            {children}
        </div>
    );
};

export default PrivateRoute;