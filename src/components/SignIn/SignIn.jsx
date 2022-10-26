import React, { useState } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

export default function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [accessToken, setAccessToken] = useState("");
  // Get username and password when signin
  const handleGetUsername = (e) => setUsername(e.target.value);
  const handleGetPassword = (e) => setPassword(e.target.value);
  const dataLogin = {
    email: username,
    password: password,
  };
  // Call API for login
  const handleLogin = () => {
    axios({
      url: "http://localhost:3000/login",
      method: "POST",
      headers: {},
      data: dataLogin,
    })
      .then((res) => {
        const { accessToken } = res.data;
        setAccessToken(accessToken);
        console.log(accessToken);
      })
      .catch((err) => console.err(err));
  };
  if (accessToken) {
    return <div>HomePageUser</div>;
  }
  return (
    <React.Fragment>
      <form>
        <div>
          <div className="text-center mb-3">
            <p>Sign in with:</p>
            <button type="button" className="btn btn-link btn-floating mx-1">
              <i className="fab fa-facebook-f" />
            </button>
            <button type="button" className="btn btn-link btn-floating mx-1">
              <i className="fab fa-google" />
            </button>
            <button type="button" className="btn btn-link btn-floating mx-1">
              <i className="fab fa-twitter" />
            </button>
            <button type="button" className="btn btn-link btn-floating mx-1">
              <i className="fab fa-github" />
            </button>
          </div>
          <p className="text-center">or:</p>
          <div className="form-outline mb-4">
            <input
              type="email"
              id="loginName"
              className="form-control"
              placeholder="Email or username"
              onChange={handleGetUsername}
            />
          </div>
          <div className="form-outline mb-4">
            <input
              type="password"
              id="loginPassword"
              className="form-control"
              placeholder="Password"
              onChange={handleGetPassword}
            />
          </div>
          <div className="row mb-4">
            <div className="col-md-6 d-flex justify-content-center">
              <div className="form-check mb-3 mb-md-0">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue
                  id="loginCheck"
                  defaultChecked
                />
                <label className="form-check-label" htmlFor="loginCheck">
                  Remember me
                </label>
              </div>
            </div>
            <div className="col-md-6 d-flex justify-content-center">
              <a href="#">Forgot password?</a>
            </div>
          </div>
          <button
            type="button"
            className="btn btn-primary btn-block mb-4"
            onClick={handleLogin}
          >
            Sign in
          </button>
          <div className="text-center">
            <p>
              Not a member? <a href="#">Register</a>
            </p>
          </div>
        </div>
      </form>
    </React.Fragment>
  );
}
