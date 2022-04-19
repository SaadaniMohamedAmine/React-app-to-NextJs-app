import React from "react";
import User from "../components/User";

const Users = ({data}) => {
  const users=data.results
  return (
    <div className="users-page bg-light">
      <div className="container-md py-5">
        <div className="h-100 p-5 text-white bg-dark rounded-3 p-5 o">
          <h2 className="py-3">
            Random Users <i className="bi bi-people-fill mx-5"></i>
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
        <h2 className="mt-5">List of users</h2>
        <div className="row gx-5">
          {users.map((user, index) => (
            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 p-3 px-sm-4" key={index}>
              <User user={user}  type={false}/>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps=async pageContext=>{
  const response=await fetch('https://randomuser.me/api/?results=8') ;
  const data=await response.json() ;
  return {
    props:{
        data
    }
  }
}

export default Users;
