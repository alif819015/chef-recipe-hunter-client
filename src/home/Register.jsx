/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { Form, Link } from "react-router-dom";
import { AuthContext } from "../auth/AuthProvider";
import { FaGoogle, FaGithub } from 'react-icons/fa';

const Register = () => {
  const { createUser,google,gitHub } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photo, email, password);

    setSuccess('');
    setError('');

    if(!/(?=.*[A-Z])/.test(password)) {      
        setError('Please at least add one Uppercase');
        return;
    }
    else if(!/(?=.*[!@#$&*])/.test(password)){
        setError('Please add a special Character')
        return;
    }
    else if(password.length < 6){
        setError('Please at least 6 character in your password')
        return;
    }
    createUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setSuccess("User has create successfully");
        event.target.reset();
      })
      .catch((error) => {
        console.error(error.message);
        setError(error.message);
      });
  };

  const handleGoogle =()=>{
    google()
    .then((result)=>{
        const googleUser = result.user;
        console.log(googleUser);
    })
    .catch(error=>{
        setError(error.message);
    })
  }

  const handleGitHub = ()=>{
    gitHub()
    .then( result =>{
        const gitUser = result.user;
        console.log(gitUser);
    })
    .catch(error=>{
        setError(error.message);
    })
  }
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col ">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Please Login!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <Form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Type Your name"
                name="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                placeholder="url"
                name="photo"
                className="input input-bordered"
                required
              />
            </div>
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
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
            <p className="text-red-600">
              <small>{error}</small>
            </p>
            <p className="text-green-600">
              <small>{success}</small>
            </p>
            <a className="label-text-alt">
              Already have an Account{" "}
              <span className="text-primary font-semibold link link-hover">
                {" "}
                <Link to="/login">Login</Link>
              </span>
            </a>
          </Form>
          <button onClick={handleGoogle} className="btn btn-ghost mb-1"><p className="flex align-middle"><span className="text-xl mr-2 text-purple-600"><FaGoogle/></span><span className="mt-1">Login with Google</span></p></button>
            <button onClick={handleGitHub} className="btn btn-ghost mb-5"><p className="flex align-middle"><span className="text-xl mr-2 text-purple-600"><FaGithub/></span><span className="mt-1">Login with GitHub</span></p></button>
        </div>
      </div>
    </div>
  );
};

export default Register;
