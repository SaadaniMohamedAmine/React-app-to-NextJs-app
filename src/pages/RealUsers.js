import React from "react";
import data from "../utils/data";
import User from "../components/User" ;

const RealUsers = () => {
  return (
    <div className="real-users">
      <div className="container-md py-5">
        <div className="h-100 p-5 text-white bg-dark rounded-3 p-5 o">
          <h2 className="py-3">
            Real Users <i className="bi bi-award-fill"></i>
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
        <h2 className="mt-5">List of real users</h2>
        <div className="row gx-5">
          {data.map((user,index) => (
            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 p-3 px-sm-4" key={index}>
              <User user={user}  type={true}/>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RealUsers;
