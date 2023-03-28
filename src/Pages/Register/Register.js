import React, { useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import SocialLogin from "../Login/SocialLogin/SocialLogin";

const Register = () => {
  const [agree, setAgree] = useState(false);
  const [createUserWithEmailAndPassword, user] =
    useCreateUserWithEmailAndPassword(auth);
  const navigate = useNavigate();

  const navigateToLogin = () => {
    navigate("/login");
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    // const agree = event.target.terms.checked;

    if (agree) {
      createUserWithEmailAndPassword(email, password);
    }
  };
  if (user) {
    navigate("/home");
  }

  return (
    <>
      <div className="container w-50 mx-auto">
        <h2 className="text-center mt-3">Login Form</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Your Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="Enter Name"
              required
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter email"
              required
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
            />
          </Form.Group>
          <Form.Group className="mb-3 d-inline" controlId="formBasicCheckbox">
            <Form.Check
              onClick={() => setAgree(!agree)}
              className="d-inline me-2"
              type="checkbox"
              name="terms"
            />
            <label
              className={agree ? "text-primary" : "text-danger"}
              htmlFor=""
            >
              Accept terms and conditions
            </label>
          </Form.Group>
          <Button 
            disabled={!agree}
            variant="dark p-2 m-2 w-50 d-block mx-auto" 
            type="submit">
            Register
          </Button>
        </Form>
        <p>
          Already register?
          <Link
            to="/login"
            onClick={navigateToLogin}
            className="text-danger text-decoration-none m-2"
          >
            Login Now
          </Link>
        </p>
        <SocialLogin></SocialLogin>
      </div>
    </>
  );
};

export default Register;
