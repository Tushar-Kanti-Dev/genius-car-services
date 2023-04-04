import { useAuthState, useSendEmailVerification } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../firebase.init";
import Spiner from "../Shared/Spiner/Spiner";
import { Toast, ToastContainer } from "react-bootstrap";

const RequiredAuth =({children})=>{
    const [user, loading, error] = useAuthState(auth);
    const location = useLocation();
    const [sendEmailVerification, sending] = useSendEmailVerification(auth);
    if(loading){
        return <Spiner></Spiner>
    }
    if(!user){
        return <Navigate to='/login' state={{from: location}} replace/>
    }
    if(!user.emailVerified){
        return <div>
            <h3>Verified your email</h3>
            <button
        onClick={async () => {
          const success = await sendEmailVerification();
          if (success) {
            Toast('Sent email');
          }
        }}
      >
        Verify email
      </button>
      <ToastContainer/>
        </div>
    }

    return children;
}

export default RequiredAuth;