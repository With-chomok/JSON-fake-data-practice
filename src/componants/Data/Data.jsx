import React, { Suspense, use } from "react";
import DataShow from "./DataShow";

const Data = ({ jsonDataPromise }) => {
  const persons = use(jsonDataPromise);
  // console.log(persons);
  return (
    <div>
      <h1>fetching data</h1>
      <h1>All data count: {persons.length}</h1>
      {persons.map((person) => (
        <DataShow key={person.id} person={person}></DataShow>
      ))}
    </div>
  );
};

export default Data;
