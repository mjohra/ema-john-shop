import React from "react";
import { Link } from "react-router-dom";
import "./Register.css";

const Register = () => {
  return (
    <div className="login">
      <div>
        <h2>Create Account</h2>
        <form onSubmit="" className="row g-3">
          <div className="col-md-6">
            <input type="email" className="form-control" id="inputEmail4" placeholder="Your Email" />
          </div>
          <div className="col-md-6">
            <input
              type="password"
              className="form-control"
              id="inputPassword4" placeholder="Your Password"
            />
          </div>
          <div className="col-md-6">
            <input
              type="password"
              className="form-control"
              id="inputPassword4" placeholder="Re-enter Password"
            />
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary">
              log in
            </button>
          </div>
        </form>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
        <div>-----------------or----------------</div>
        <button className="btn-regular">Google Sign In</button>
      </div>
    </div>
  );
};

export default Register;
