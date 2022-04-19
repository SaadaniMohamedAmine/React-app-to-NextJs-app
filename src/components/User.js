import React from "react";
import Link from 'next/link' ;

const User = ({ user,type }) => {

  return (
    <div className="card w-100" style={{ width: "15em" }}>
      <img src={user.picture.large} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{user.name.first + " " + user.name.last}</h5>
        <p className="card-text">
          <span className="mail">{user.email}</span> <br />
          <span className="text-danger">{user.phone}</span> <br />
          <span className="d-flex justify-content-between align-items-center">
            <span>From <span className="text-success">{user.location.country}</span></span>
           {
             type?  <Link  href={`/users-plate/${user.id.name}`}>
               <a className="btn btn-primary">Check</a>
             </Link>:""
           }
          </span>
        </p>
      </div>
    </div>
  );
};

export default User;
