import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useContext, useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router";
import { auth } from "../firebase/firebase.config";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
  const { setUser, setLoading, googleLogin } = useContext(AuthContext);
  const [error, setError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  console.log(location);

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setLoading(false);
        setUser(result.user);
        if (location.state) {
          navigate(location.state);
        } else {
          navigate("/");
        }
      })
      .catch((error) => setError(error.message));
  };

  // google sigIn
  const googleLoginHandler = () => {
    googleLogin()
      .then((result) => {
        setUser(result.user);
        setLoading(false);
        if (location.state) {
          navigate(location.state);
        } else {
          navigate("/");
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <div className="flex justify-center items-center flex-col mt-10">
        <h3 className="my-2 text-4xl font-semibold ">
          <span className="text-blue-400">Welcome </span> Back
        </h3>
        <p>Sign in to continue to WarmPaws</p>
      </div>

      <div className="flex justify-center items-center my-8">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl border border-gray-200">
          <div className="card-body">
            {error && <small className="text-red-400">{error}</small>}
            <form onSubmit={handleLogin}>
              <fieldset className="fieldset gap-3">
                <label className="label">Email Address</label>
                <input
                  name="email"
                  type="email"
                  className="input"
                  placeholder="your@email.com"
                />

                <label className="label">Confirm Password</label>
                <input
                  name="password"
                  type="password"
                  className="input"
                  placeholder="Enter your password"
                />
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button className="btn btn-info mt-4">Sign In</button>
              </fieldset>
            </form>
            <div className="flex gap-2">
              <hr className="text-gray-200 my-4 w-full" />
              <p className="w-full">Or continue with</p>
              <hr className="text-gray-200 my-4 w-full" />
            </div>
            <div className="w-full text-center">
              <button
                onClick={googleLoginHandler}
                className="w-full btn bg-white text-black border-[#e5e5e5]"
              >
                <svg
                  aria-label="Google logo"
                  width="16"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <g>
                    <path d="m0 0H512V512H0" fill="#fff"></path>
                    <path
                      fill="#34a853"
                      d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                    ></path>
                    <path
                      fill="#4285f4"
                      d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                    ></path>
                    <path
                      fill="#fbbc02"
                      d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                    ></path>
                    <path
                      fill="#ea4335"
                      d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                    ></path>
                  </g>
                </svg>
                Login with Google
              </button>
              <p className="my-5">
                Don't have an account?
                <Link
                  to="/register"
                  className="text-blue-400 border-b-1 font-semibold"
                >
                  {"  "}
                  Create one now
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
