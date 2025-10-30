import React from "react";
import Profile from "./profile";
import "./gallery.css";

const Gallery = () => {
  // const student = {
  //     myname: "Lokendra Singh",
  //     branch: "Cs",
  //     section: "B",
  //     college: "Abes Engineering College",
  // };
  const student = [
    {
      pic: "https://picsum.photos/200/200",
      myname: "Lokendra Singh",
      branch: "Cs",
      section: "B",
      college: "Abes Engineering College",
    },
    {
      pic: "https://picsum.photos/200/200",
      myname: "Lakshay Singh",
      branch: "Cs",
      section: "B",
      college: "Abes Engineering College",
    },
  ];
  return (
    <>
      {/*
      ***************1st Operation****************
      
      <div>
        <Profile
          name="Lokendra Singh"
          branch="CS"
          section="B"
          college="ABES Engineering College"
        ></Profile>
      </div>

      <div>
        <Profile
          name="Lakshay Goel"
          branch="CS"
          section="B"
          college="ABES Engineering College"
        ></Profile>
      </div> */}

      <div className="gallery">
        {student.map((ele, index) => (
          <Profile data={ele} key={index}>
            {" "}
          </Profile>
        ))}
      </div>
    </>
  );
};

export default Gallery;
