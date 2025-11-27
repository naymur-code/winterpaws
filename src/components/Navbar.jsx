import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router";
import logo from "../assets/logo1.png";
import { AuthContext } from "../provider/AuthProvider";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase.config";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        console.log("Sign-out successful.");
      })
      .catch((error) => console.log(error));
  };
  const navLinks = (
    <>
      <li>
        <NavLink to="/home" onClick={() => setDrawerOpen(false)}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/services" onClick={() => setDrawerOpen(false)}>
          Services
        </NavLink>
      </li>
      <li>
        <NavLink to="/profile" onClick={() => setDrawerOpen(false)}>
          My Profile
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="bg-base-100 shadow-sm">
      {/* Navbar */}
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <Link
            to="/"
            className="btn btn-ghost text-xl flex items-center gap-2"
          >
            <img src={logo} alt="" width="40" />
            <span>WinterPaws</span>
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>

        {/* Mobile: Drawer Button */}
        <div className="navbar-end lg:hidden">
          <button
            className="btn btn-ghost"
            onClick={() => setDrawerOpen(!drawerOpen)} // toggle drawer
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Desktop */}

        {user ? (
          <div className="navbar-end hidden lg:flex items-center gap-4">
            {/* Avatar with hover-name */}
            <div className="relative group cursor-pointer">
              <div className="avatar">
                <div className="w-11 rounded-full">
                  <img src={user?.photoURL} alt="User Avatar" />
                </div>
              </div>

              {/* Hover Display Name */}
              <div
                className="absolute left-1/2 -translate-x-1/2 mt-2 
                   bg-base-200 text-sm px-3 py-1 rounded shadow 
                   hidden group-hover:block whitespace-nowrap z-50"
              >
                {user?.displayName}
              </div>
            </div>

            {/* Logout Button */}
            <button
              onClick={handleLogout}
              className="btn btn-error text-white btn-sm px-5"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="navbar-end hidden lg:flex gap-4">
            <Link to="/login" className="btn btn-outline btn-info btn-sm px-5">
              Login
            </Link>
          </div>
        )}
      </div>

      {/* Full Page Drawer */}
      {drawerOpen && (
        <>
          {/* Dark overlay - closes drawer */}
          <div
            className="fixed inset-0 bg-black/50 z-40"
            onClick={() => setDrawerOpen(false)}
          ></div>

          {/* Drawer */}
          <div
            className="fixed top-0 right-0 w-3/4 max-w-sm min-h-full 
                    bg-base-200 p-6 shadow-lg overflow-auto z-50"
          >
            {/* Avatar */}
            {user && (
              <div className="flex items-center gap-4 mb-4">
                <div className="avatar">
                  <div className="w-14 rounded-full">
                    <img src={user?.photoURL} alt="" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{user?.displayName}</h3>
                  <p className="text-sm opacity-70">{user?.email}</p>
                </div>
              </div>
            )}

            {/* Menu Links */}
            <ul className="menu space-y-2">
              <li>
                <NavLink to="/home" onClick={() => setDrawerOpen(false)}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/services" onClick={() => setDrawerOpen(false)}>
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink to="/profile" onClick={() => setDrawerOpen(false)}>
                  My Profile
                </NavLink>
              </li>
            </ul>

            {/* Logout / Login */}
            {user ? (
              <button
                onClick={() => {
                  handleLogout();
                  setDrawerOpen(false);
                }}
                className="btn btn-error text-white mt-4 w-full"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                onClick={() => setDrawerOpen(false)}
                className="btn btn-outline btn-info w-full mt-4"
              >
                Login
              </Link>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
