import React, { useEffect, useState } from "react";
import axios from "axios";
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";
import Home from "../Home/Home";

export default function Form() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [accessToken, setAccessToken] = useState("");
  const [dataUser, setDataUser] = useState("");
  // Get email and password when signin
  const handleGetEmail = (e) => setEmail(e.target.value);
  const handleGetPassword = (e) => setPassword(e.target.value);
  const dataLogin = {
    email: email,
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
        setDataUser(res.data);
      })
      .catch((err) => console.err(err));
  };

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailRegister, setEmailRegister] = useState("");
  const [usernameRegister, setUsernameRegister] = useState("");
  const [passwordRegister, setPasswordRegister] = useState("");
  const [repeatPasswordRegister, setRepeatPasswordRegister] = useState("");

  const handleGetFirstName = (e) => setFirstName(e.target.value);
  const handleGetLastName = (e) => setLastName(e.target.value);
  const handleGetEmailRegister = (e) => setEmailRegister(e.target.value);
  const handleGetUsernameRegister = (e) => setUsernameRegister(e.target.value);
  const handleGetPasswordRegister = (e) => setPasswordRegister(e.target.value);
  const handleGetRepeatPasswordRegister = (e) =>
    setRepeatPasswordRegister(e.target.value);
  const avatar = "https://i.pravatar.cc/300";
  const dataRegister = {
    firstName: firstName,
    lastName: lastName,
    username: usernameRegister,
    email: emailRegister,
    password: passwordRegister,
    avatar: avatar,
  };
  // Call API for register
  const handleRegister = () => {
    axios({
      url: "http://localhost:3000/register",
      method: "POST",
      data: dataRegister,
    })
      .then((res) => {
        console.log(res.data);
        alert("Register successfully!!!");
      })
      .catch((err) => console.err(err));
  };

  if (accessToken) {
    return <Home token={accessToken} dataUser={dataUser} />;
  }

  return (
    <React.Fragment>
      <div className="container">
        <div className="row text-center justify-content-center w-25 form-container">
          <ul
            className="nav nav-pills my-3 justify-content-center"
            id="pills-tab"
            role="tablist"
          >
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                id="pills-signin-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-signin"
                type="button"
                role="tab"
                aria-controls="pills-signin"
                aria-selected="true"
              >
                Sign In
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link  "
                id="pills-signup-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-signup"
                type="button"
                role="tab"
                aria-controls="pills-signup"
                aria-selected="false"
              >
                Sign Up
              </button>
            </li>
          </ul>
          <div className="tab-content" id="pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="pills-signin"
              role="tabpanel"
              aria-labelledby="pills-signin-tab"
              tabIndex={0}
            >
              {/* FORM SIGNIN  */}
              <form>
                <div>
                  <div className="text-center mb-3">
                    <p>Sign in with:</p>
                    <button
                      type="button"
                      className="btn btn-link btn-floating mx-1"
                    >
                      <i className="fab fa-facebook-f" />
                    </button>
                    <button
                      type="button"
                      className="btn btn-link btn-floating mx-1"
                    >
                      <i className="fab fa-google" />
                    </button>
                    <button
                      type="button"
                      className="btn btn-link btn-floating mx-1"
                    >
                      <i className="fab fa-twitter" />
                    </button>
                    <button
                      type="button"
                      className="btn btn-link btn-floating mx-1"
                    >
                      <i className="fab fa-github" />
                    </button>
                  </div>
                  <p className="text-center">or:</p>
                  <div className="form-outline mb-4">
                    <input
                      type="email"
                      id="loginName"
                      className="form-control"
                      placeholder="Email "
                      onChange={handleGetEmail}
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
                        <label
                          className="form-check-label"
                          htmlFor="loginCheck"
                        >
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
              {/* FORM SIGNIN  */}
            </div>
            <div
              className="tab-pane fade"
              id="pills-signup"
              role="tabpanel"
              aria-labelledby="pills-signup-tab"
              tabIndex={0}
            >
              {/* FORM SIGNUP  */}
              <form>
                <div>
                  <div className="text-center mb-3">
                    <p>Sign up with:</p>
                    <button
                      type="button"
                      className="btn btn-link btn-floating mx-1"
                    >
                      <i className="fab fa-facebook-f" />
                    </button>
                    <button
                      type="button"
                      className="btn btn-link btn-floating mx-1"
                    >
                      <i className="fab fa-google" />
                    </button>
                    <button
                      type="button"
                      className="btn btn-link btn-floating mx-1"
                    >
                      <i className="fab fa-twitter" />
                    </button>
                    <button
                      type="button"
                      className="btn btn-link btn-floating mx-1"
                    >
                      <i className="fab fa-github" />
                    </button>
                  </div>
                  <p className="text-center">or:</p>
                  <div className="form-outline mb-4">
                    <input
                      type="text"
                      id="registerFirstName"
                      className="form-control"
                      placeholder="First Name"
                      onChange={handleGetFirstName}
                    />
                  </div>
                  <div className="form-outline mb-4">
                    <input
                      type="text"
                      id="registerLastName"
                      className="form-control"
                      placeholder="Last Name"
                      onChange={handleGetLastName}
                    />
                  </div>
                  <div className="form-outline mb-4">
                    <input
                      type="text"
                      id="registerUsername"
                      className="form-control"
                      placeholder="Username"
                      onChange={handleGetUsernameRegister}
                    />
                  </div>
                  <div className="form-outline mb-4">
                    <input
                      type="email"
                      id="registerEmail"
                      className="form-control"
                      placeholder="Email"
                      onChange={handleGetEmailRegister}
                    />
                  </div>
                  <div className="form-outline mb-4">
                    <input
                      type="password"
                      id="registerPassword"
                      className="form-control"
                      placeholder="Password"
                      onChange={handleGetPasswordRegister}
                    />
                  </div>
                  <div className="form-outline mb-4">
                    <input
                      type="password"
                      id="registerRepeatPassword"
                      className="form-control"
                      placeholder="Repeat password"
                      onChange={handleGetRepeatPasswordRegister}
                    />
                  </div>
                  <div className="form-check d-flex justify-content-center mb-4">
                    <input
                      className="form-check-input me-2"
                      type="checkbox"
                      defaultValue
                      id="registerCheck"
                      defaultChecked
                      aria-describedby="registerCheckHelpText"
                    />
                    <label className="form-check-label" htmlFor="registerCheck">
                      I have read and agree to the terms
                    </label>
                  </div>
                  <button
                    type="button"
                    className="btn btn-primary btn-block mb-3"
                    onClick={handleRegister}
                  >
                    Sign Up
                  </button>
                </div>
              </form>
              {/* FORM SIGNUP  */}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
