import { signOut } from "firebase/auth";
import React from "react";
import { Link} from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firbase.init";

const Nav = () => {
  const [user] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
    
  };

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <Link to="/">
              <li>
                <a href="/">Home</a>
              </li>
            </Link>
            <Link to="/">
              <li className="font-bold">
                <a href="/">Home</a>
              </li>
            </Link>
            {user && (
              <li>
                <Link to="/profile">Profile</Link>
              </li>
            )}
            
          </ul>
        </div>
        <img
          className="w-10 h-10"
          src="https://i.postimg.cc/90cqnM1G/420049771-392741139814091-4903558908153046505-n.jpg"
          alt=""
        />
        <a href="/" className="btn btn-ghost normal-case text-sm text-white">
          ABC E Comerce
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <Link to="/">
            <li className="font-bold">
              <a href="/">Home</a>
            </li>
          </Link>
          {user && (
            <>
            <li>
              <Link to="/all">All</Link>
            </li>
            <li>
              <Link to="/add">Add</Link>
            </li>
          </>
          )}
        </ul>
      </div>
      <div className="navbar-end items-center">
        <div className="flex items-end gap-2">
          <div className="">
            {user && (
              <div className="avatar">
                <div className="w-6 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img alt="avatar" src={user.photoURL} />
                </div>
              </div>
            )}
          </div>
          {user ? (
            <li>
              <button
                className="btn btn-sm text-white text-xs"
                onClick={logout}
              >
                Log Out
              </button>
            </li>
          ) : (
            <Link to="/login">
              {" "}
              <li>
                <a href="/" className="text-white font-bold">
                  Login
                </a>
              </li>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;
