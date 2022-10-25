import React from "react";

export default function Form() {
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
                className="nav-link"
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
                <div class="text-center mb-3">
                  <p>Sign in with:</p>
                  <button type="button" class="btn btn-link btn-floating mx-1">
                    <i class="fab fa-facebook-f"></i>
                  </button>

                  <button type="button" class="btn btn-link btn-floating mx-1">
                    <i class="fab fa-google"></i>
                  </button>

                  <button type="button" class="btn btn-link btn-floating mx-1">
                    <i class="fab fa-twitter"></i>
                  </button>

                  <button type="button" class="btn btn-link btn-floating mx-1">
                    <i class="fab fa-github"></i>
                  </button>
                </div>

                <p class="text-center">or:</p>

                <div class="form-outline mb-4">
                  <input
                    type="email"
                    id="loginName"
                    class="form-control"
                    placeholder="Email or username"
                  />
                  {/* <label class="form-label" for="loginName">
                    Email or username
                  </label> */}
                </div>

                <div class="form-outline mb-4">
                  <input
                    type="password"
                    id="loginPassword"
                    class="form-control"
                    placeholder="Password"
                  />
                  {/* <label class="form-label" for="loginPassword">
                    Password
                  </label> */}
                </div>

                <div class="row mb-4">
                  <div class="col-md-6 d-flex justify-content-center">
                    <div class="form-check mb-3 mb-md-0">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="loginCheck"
                        checked
                      />
                      <label class="form-check-label" for="loginCheck">
                        Remember me
                      </label>
                    </div>
                  </div>

                  <div class="col-md-6 d-flex justify-content-center">
                    <a href="#">Forgot password?</a>
                  </div>
                </div>

                <button type="submit" class="btn btn-primary btn-block mb-4">
                  Sign in
                </button>

                <div class="text-center">
                  <p>
                    Not a member? <a href="#">Register</a>
                  </p>
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
                <div class="text-center mb-3">
                  <p>Sign up with:</p>
                  <button type="button" class="btn btn-link btn-floating mx-1">
                    <i class="fab fa-facebook-f"></i>
                  </button>

                  <button type="button" class="btn btn-link btn-floating mx-1">
                    <i class="fab fa-google"></i>
                  </button>

                  <button type="button" class="btn btn-link btn-floating mx-1">
                    <i class="fab fa-twitter"></i>
                  </button>

                  <button type="button" class="btn btn-link btn-floating mx-1">
                    <i class="fab fa-github"></i>
                  </button>
                </div>

                <p class="text-center">or:</p>

                <div class="form-outline mb-4">
                  <input
                    type="text"
                    id="registerName"
                    class="form-control"
                    placeholder="Name"
                  />
                  {/* <label class="form-label" for="registerName">
                    Name
                  </label> */}
                </div>

                <div class="form-outline mb-4">
                  <input
                    type="text"
                    id="registerUsername"
                    class="form-control"
                    placeholder="Username"
                  />
                  {/* <label class="form-label" for="registerUsername">
                    Username
                  </label> */}
                </div>

                <div class="form-outline mb-4">
                  <input
                    type="email"
                    id="registerEmail"
                    class="form-control"
                    placeholder="Email"
                  />
                  {/* <label class="form-label" for="registerEmail">
                    Email
                  </label> */}
                </div>

                <div class="form-outline mb-4">
                  <input
                    type="password"
                    id="registerPassword"
                    class="form-control"
                    placeholder="Password"
                  />
                  {/* <label class="form-label" for="registerPassword">
                    Password
                  </label> */}
                </div>

                <div class="form-outline mb-4">
                  <input
                    type="password"
                    id="registerRepeatPassword"
                    class="form-control"
                    placeholder="Repeat password"
                  />
                  {/* <label class="form-label" for="registerRepeatPassword">
                    Repeat password
                  </label> */}
                </div>

                <div class="form-check d-flex justify-content-center mb-4">
                  <input
                    class="form-check-input me-2"
                    type="checkbox"
                    value=""
                    id="registerCheck"
                    checked
                    aria-describedby="registerCheckHelpText"
                  />
                  <label class="form-check-label" for="registerCheck">
                    I have read and agree to the terms
                  </label>
                </div>

                <button type="submit" class="btn btn-primary btn-block mb-3">
                  Sign Up
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
