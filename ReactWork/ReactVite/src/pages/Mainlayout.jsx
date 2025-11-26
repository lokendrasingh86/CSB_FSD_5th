import React from "react";
import { Link } from "react-router";

const Mainlayout = () => {
  return (
    <div>
      <Link
        style={{
          fontSize: "40px",
          color: "red",
          marginLeft: "20px",
          marginTop: "20px",
        }}
        to="./Login"
      >
        Login
      </Link>
      <Link
        style={{
          fontSize: "40px",
          color: "red",
          marginLeft: "20px",
          marginTop: "20px",
        }}
        to="./registration"
      >
        Registration
      </Link>
    </div>
  );
};

export default Mainlayout;
