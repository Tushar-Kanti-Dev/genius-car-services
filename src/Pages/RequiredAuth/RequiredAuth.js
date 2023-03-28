import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../firebase.init";
import Spiner from "../Shared/Spiner/Spiner";

const RequiredAuth =({children})=>{
    const [user, loading, error] = useAuthState(auth);
    const location = useLocation();
    if(loading){
        return <Spiner></Spiner>
    }
    if(!user){
        return <Navigate to='/login' state={{from: location}} replace/>
    }

    return children;
}

export default RequiredAuth;