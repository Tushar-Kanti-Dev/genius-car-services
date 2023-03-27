import React from 'react';
import google from '../../../images/social images/google.png';
import facebook from '../../../images/social images/facebook.png';
import github from '../../../images/social images/git.png';
import auth from '../../../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    // google login 
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    let errorMessage ;
    if (error) {

          errorMessage=<div>
            <p>Error: {error.message}</p>
          </div>
      }
      if(user){
        navigate('/')
      }
      
    return (
        <>
            <div className='d-flex align-items-center'>
                
                <div style={{height: '1px'}} className='w-50 bg-primary'></div>
                <p className='mx-2 mt-2'>Or</p>
                <div style={{height: '1px'}} className='w-50 bg-primary'></div>
            </div>
            <div className="social-button">
            <p className='text-danger'>{errorMessage}</p>
                <button
                onClick={() => signInWithGoogle()}
                 className='btn btn-dark w-50 mx-auto d-block my-2'>
                    <img src={google} alt="" />
                    <span>Signin With Google</span>
                </button>
                <button className='btn btn-dark w-50 mx-auto d-block my-2'>
                    <img src={facebook} alt="" />
                    <span>Signin With FaceBook</span>
                </button>
                <button className='btn btn-dark w-50 mx-auto d-block my-2'>
                    <img src={github} alt="" />
                    <span>Signin With Github</span>
                </button>
            </div>
        </>
    );
};

export default SocialLogin;