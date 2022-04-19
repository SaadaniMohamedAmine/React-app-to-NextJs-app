import React from "react";
import Card from "../components/Card";

const About = () => {
  const items = [
    {
      title: "option 1",
      description: "yes,i love arts and this is the last item to recuperate",
    },
    {
      title: "option 2",
      description: "yes,i love arts and this is the last item to recuperate",
    },
    ,
    {
      title: "option 3",
      description: "yes,i love arts and this is the last item to recuperate",
    },
    {
      title: "option 4",
      description: "yes,i love arts and this is the last item to recuperate",
    },
  ];
  return (
    <div className="about bg-light">
      <div className="container-md py-5">
        <div className="h-100 p-5 text-white bg-dark rounded-3 p-5 o">
          <h2 className=" py-3">
            About Us <i className="ms-5 bi bi-file-earmark-person-fill"></i>
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
      </div>
      <div className="container-fluid py-5 px-3 bg-dark">
       <div className="container">
       <div className="row gx-5">
          {items.map((item,index) => (
            <div key={index} className="col-lg-3 col-md-4 col-sm-6 col-xs-12 p-3 mb-3">
            <Card card={item} />
          </div>
          )
            
          )}
       </div>
        </div>
      </div>
    </div>
  );
};

export default About;
