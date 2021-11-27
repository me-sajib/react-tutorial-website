import React from "react";
import { useParams } from "react-router";

const Course = () => {
  const id = useParams().id;
  return (
    <div>
      <h1>course no {id}</h1>
    </div>
  );
};

export default Course;
