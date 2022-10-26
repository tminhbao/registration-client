import React from "react";

export default function SignUp() {
  return (
    <React.Fragment>
      <form>
        <div>
          <div className="text-center mb-3">
            <p>Sign up with:</p>
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
              type="text"
              id="registerName"
              className="form-control"
              placeholder="Name"
            />
          </div>
          <div className="form-outline mb-4">
            <input
              type="text"
              id="registerUsername"
              className="form-control"
              placeholder="Username"
            />
          </div>
          <div className="form-outline mb-4">
            <input
              type="email"
              id="registerEmail"
              className="form-control"
              placeholder="Email"
            />
          </div>
          <div className="form-outline mb-4">
            <input
              type="password"
              id="registerPassword"
              className="form-control"
              placeholder="Password"
            />
          </div>
          <div className="form-outline mb-4">
            <input
              type="password"
              id="registerRepeatPassword"
              className="form-control"
              placeholder="Repeat password"
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
          <button type="submit" className="btn btn-primary btn-block mb-3">
            Sign Up
          </button>
        </div>
      </form>
    </React.Fragment>
  );
}
