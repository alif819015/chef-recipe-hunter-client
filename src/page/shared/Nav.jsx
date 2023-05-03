/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../auth/AuthProvider";

const Nav = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.error(error.message);
      });
  };

  return (
    <div className="navbarStyle">
      <nav className="bg-secondary text-primary-content flex items-center justify-between flex-wrap p-6">
        <div className="flex items-center flex-shrink-0 mr-6">
          <p className="btn btn-ghost normal-case text-xl">KitchenQuest</p>
        </div>
        <div className="block lg:hidden">
          <button
            className="navbar-toggler ml-auto"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div
          className="w-full block flex-grow lg:flex lg:items-center lg:w-auto"
          id="navbarNav"
        >
          <div className="text-sm lg:flex-grow">
            <Link
              to="/"
              className="btn btn-ghost normal-case text-xl mr-4"
            >
              Home
            </Link>
            <Link
              to="/blogs"
              className="btn btn-ghost normal-case text-xl lg:inline-block mr-4"
            >
              Blog
            </Link>

          </div>
           <>
           {user ? (
              <button
                onClick={handleLogout}
                className="btn btn-ghost normal-case text-xl lg:inline-block mr-4"
              >
                Logout
              </button>
            ) : (
             <>
              <Link
                to="/login"
                className="btn btn-ghost normal-case text-xl lg:inline-block mr-4"
              >
                <button>Login</button>
              </Link>
              <Link
                to="/register"
                className="btn btn-ghost normal-case text-xl lg:inline-block mr-4"
              >
                <button>Register</button>
              </Link>
             </>
            )}
            {user && (
              <div className="avatar online">
                <div className="w-10 rounded-full">
                  <img src={user?.photoURL} />
                </div>
              </div>
            )}
           </>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
