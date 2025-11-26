import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";

const Login = ({ logData }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function verification(e) {
    e.preventDefault();
    // console.log("Login data:", logData);
    // console.log("Entered email:", email);
    // console.log("Entered password:", password);

    // Check email and password
    if (logData.email === email) {
      if (logData.password === password) {
        alert("Successfully Login and Navigated to Dashboard");
        navigate("/dashboard"); // Navigate to dashboard
      } else {
        alert("Password Incorrect");
      }
    } else {
      alert("Email is not registered with us");
    }
  }
  return (
    <div>
      <h2>Login Form</h2>
      <form>
        <div></div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        <button
          onClick={verification}
          type="submit"
          className="btn btn-primary"
        >
          Login
        </button>
        <div className="mt-3">
          <p>
            Don't have an account? <Link to="/registration">Register here</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
