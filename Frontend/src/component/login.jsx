import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Login = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100 bg-light text-dark">
      <div
        className="card p-4 shadow bg-white text-dark"
        style={{ width: "100%", maxWidth: "400px" }}
      >
        <h3 className="text-center mb-4">Student Login</h3>
        <form>
          <div className="mb-3">
            <label htmlFor="username" className="form-label text-dark">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              id="username"
              placeholder="Enter your username"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label text-dark">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter your password"
            />
          </div>
          <button type="submit" className="btn w-100 btn-primary">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
