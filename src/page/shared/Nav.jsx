/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="navbarStyle">
  <nav className="bg-secondary text-primary-content flex items-center justify-between flex-wrap p-6">
    <div className="flex items-center flex-shrink-0 mr-6">
      <p className="btn btn-ghost normal-case text-xl">Website name</p>
    </div>
    <div className="block lg:hidden">
      <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
    </div>
    <div className="w-full block flex-grow lg:flex lg:items-center lg:mt-4 lg:w-auto" id="navbarNav">
      <div className="text-sm lg:flex-grow">
        <Link to='/' className="btn btn-ghost normal-case text-xl lg:inline-block mr-4">Home</Link>
        <Link to='/blog' className="btn btn-ghost normal-case text-xl lg:inline-block mr-4">Blog</Link>
        <Link to='/login' className="btn btn-ghost normal-case text-xl lg:inline-block mr-4">Login</Link>
        <Link to='/register' className="btn btn-ghost normal-case text-xl lg:inline-block mr-4">Register</Link>
      </div>
    </div>
  </nav>
</div>

  );
};

export default Nav;
