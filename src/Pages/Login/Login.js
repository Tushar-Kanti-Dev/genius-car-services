import { async } from "@firebase/util";
import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import "./Login.css";
import SocialLogin from "./SocialLogin/SocialLogin";

const Login = () => {

  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
    const emailRef = useRef('');
    const passwordRef = useRef('');

    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || '/';


    const handleSubmit = event =>{
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log(email, password);

        signInWithEmailAndPassword(email, password);
    }
    if(user){
      navigate(from, {replace: true});
    }

    const navigateToRegister = () =>{
        navigate('/register')
    }
    let errorMessage ;
    if (error) {
          errorMessage= <p>Error: {error?.message}</p>
      }
      const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
      const handleResetPassword = async() =>{
        const email = emailRef.current.value;
        const success = await sendPasswordResetEmail(
          email
        );
        if (success) {
          alert('Sent email');
        }
      }
  return (
    <div className="container w-50 mx-auto">
        <h2 className="text-center mt-3">Login Form</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control ref={emailRef} type="email" placeholder="Enter email" required/>
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control ref={passwordRef} type="password" placeholder="Password" />
        </Form.Group>
        
        <Button variant="primary w-50 mx-auto d-block mt-2 mb-2 p-2" type="submit">
          Login
        </Button>
      </Form>
      <p>{errorMessage}</p>
      <p>Forget Password?<Link to='/register' onClick={handleResetPassword} className="text-primary text-decoration-none m-2">Reset Password</Link></p>
      <p>New Member?<Link to='/register' onClick={navigateToRegister} className="text-primary text-decoration-none m-2">Register Now</Link></p>
      
      
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Login;
