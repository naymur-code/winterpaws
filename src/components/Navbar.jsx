import React, { useState } from "react";
import { Link, NavLink } from "react-router";
import logo from "../assets/logo1.png";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false); // control drawer open/close

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
      <li>
        <NavLink to="/register" onClick={() => setDrawerOpen(false)}>
          Register
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
        <div className="navbar-end hidden lg:flex gap-5">
          <div className="avatar cursor-pointer">
            <div className="w-10 rounded-full ring ring-[#2563eb] ring-offset-base-100 ring-offset-2">
              <img
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                alt="User"
              />
            </div>
          </div>
          <Link className="btn btn-error text-white btn-sm px-5">Logout</Link>
        </div>
      </div>

      {/* Full Page Drawer */}
      {drawerOpen && (
        <div className="fixed inset-0 z-50 bg-black/50">
          <div className="fixed top-0 right-0 w-3/4 max-w-sm min-h-full bg-base-200 p-6 shadow-lg overflow-auto">
            {/* Avatar */}
            <div className="flex items-center gap-4 mb-4">
              <div className="avatar">
                <div className="w-14 rounded-full">
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    alt=""
                  />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-lg">User Name</h3>
                <p className="text-sm opacity-70">user@email.com</p>
              </div>
            </div>

            {/* Menu Links */}
            <ul className="menu space-y-2">{navLinks}</ul>

            {/* Logout */}
            <Link className="btn btn-error text-white mt-4 w-full">Logout</Link>
          </div>

          {/* Clicking outside closes drawer */}
          <div
            className="fixed inset-0"
            onClick={() => setDrawerOpen(false)}
          ></div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
