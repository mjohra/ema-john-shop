import React from "react";
import { Link ,useLocation,useHistory} from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const {signInUsingGoogle}=useAuth();
  const location=useLocation();
  const history=useHistory();
  const redirect_uri=location.state?.from || '/shop';
  console.log('came from ',location.state?.from);
  const handleGoogleLogin=()=>{
    signInUsingGoogle()
    .then(result=>{
      history.push(redirect_uri);
    })

  }

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit="" className="row g-3">
        <div className="col-md-6">
          <label htmlFor="inputEmail4" className="form-label">
            Email  </label>
          <input type="email" className="form-control" id="inputEmail4" />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputPassword4" className="form-label">
            Password  </label>
          <input type="password" className="form-control" id="inputPassword4" />
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Sign in
          </button>
        </div>
      </form>
      <p>New to ema-john <Link to ="/register">Create Account</Link></p>
      <div>-----------------or----------------</div>
      <button className="btn-regular"
      onClick={handleGoogleLogin}
      >Google Sign In</button>
    </div>
  );
};

export default Login;
