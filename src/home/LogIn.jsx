/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { Form, Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../auth/AuthProvider";

const LogIn = () => {
    const {login} = useContext(AuthContext);
    const navigate = useNavigate('')
    const location = useLocation();
    console.log(location)
    const from = location.state?.from?.pathname || '/'

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    setError('')
    setSuccess('')
    login(email, password)
    .then(result =>{
        const loggedUser = result.user;
        console.log(loggedUser);
        setSuccess("User Login successfully");
        event.target.reset();
        navigate(from, {replace: true})

    })
    .catch(error =>{
        setError(error.message)
        setError('Password Dos not match')
    })

  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col ">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Please Login!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <Form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
              <p className="text-red-600">
                <small>{error}</small>
              </p>
              <p className="text-green-600">
                <small>{success}</small>
              </p>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
            <a className="label-text-alt">
              New to please first{" "}
              <span className="text-primary font-semibold link link-hover">
                {" "}
                <Link to="/register">Register</Link>
              </span>
            </a>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
