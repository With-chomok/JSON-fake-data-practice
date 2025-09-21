import React from "react";

const DataShow = ({ person }) => {
  return (
    <div>
      <div className="card">
        <img src={person.image} alt="" />
        <h2>Name is : {person.name}</h2>
        <p>Email is: {person.email}</p>
        <p>Age is: {person.age}</p>
      </div>
    </div>
  );
};

export default DataShow;
