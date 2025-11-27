import React from "react";
import { Link } from "react-router";

const Error = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen gap-3">
      <h1 className="text-6xl font-bold">404!</h1>
      <p className="text-xl">Page not found</p>
      <div>
        <Link to="/" className="btn btn-info">
        Go Home
      </Link>
      </div>
    </div>
  );
};

export default Error;
