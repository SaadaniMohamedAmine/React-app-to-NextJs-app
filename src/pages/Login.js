import React from "react";

const Login = () => {
  return (
    <div className="login-page bg-light">
      <div className="container-md py-5">
        <div className="h-100 p-5 text-white bg-dark rounded-3 p-5 o">
          <h2 className="py-3">
            Login <i className="bi bi-box-arrow-in-right"></i>
          </h2>
          <p className="w-75">
            Swap the background-color utility and add a `.text-*` color utility
            to mix up the jumbotron look. Then, mix and match with additional
            component themes and more.
          </p>
          <button className="btn btn-outline-light" type="button">
            Example button
          </button>
        </div>
        <h2 className="mt-5"> Welcome Again</h2>
        <form className="border p-3">
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Check me out
            </label>
          </div>
          <div className="mb-2 text-end">
            <button type="submit" className="btn btn-danger">
            Submit
          </button>
          </div>
          
        </form>
      </div>
    </div>
  );
};

export default Login;
