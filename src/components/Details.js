import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import data from "../utils/data";

const Details = () => {
  const [user, setUser] = useState(null);
  const { id } = useParams();
  const getOneUser = () => {
    setUser(data.find((user) => user.id.name === id));  
  };
  useEffect(() => {
    getOneUser();
  });
  return (
    <div className="details">
      <div className="container p-5">
        {user && (
          <div className="card mb-3 bg-dark w-100 text-white my-5 mx-0" style={{ width: "600px" }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={user.picture.large}
                  className="img-fluid rounded-star w-100 h-100"
                  alt="..."
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">
                    {user.name.first + " " + user.name.last}
                  </h5>
                  <p className="card-text">
                    <span>Email:</span> {user.email} <br />
                    <span>Phone: </span>  {user.phone} <br />
                    <span>City: </span>  {user.location.city} <br />
                    <span>Country: </span>  {user.location.country} <br />
                  </p>
                  <p className="card-text">
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Details;
