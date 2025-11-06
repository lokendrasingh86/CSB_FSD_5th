import React, { useState } from "react";
import pigeon from "./pigeon.png";
import { use } from "react";

const ImageManipulation = () => {
  const [imgHeight, setImgHeight] = useState(100);
  const [imgWidht, setImgWidth] = useState(100);
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);
  const [imgRotate,setImgRotate]=useState(0);

  function changeBackground() {
    setRed(Math.random() * 255);
    setGreen(Math.random() * 255);
    setBlue(Math.random() * 255);
  }

  function IncreaseHeight() {
    setImgHeight(imgHeight + 10);
  }
  function DecreaseHeight() {
    setImgHeight(imgHeight - 10);
  }

  function IncreaseWidth() {
    setImgWidth(imgWidht + 10);
  }
  function DecreaseWidth() {
    setImgWidth(imgWidht - 10);
  }

  return (
    <>
      <h2>ImageManipulation</h2>
      <div
        style={{
          border: "1px solid green",
          width: "180px",
          height: "180px",
          margin: "0px auto",
          textAlign: "center",
          paddingTop: "2px",
          backgroundColor: `rgb(${red},${blue},${green})`,
        }}
      >
        <img
          src={pigeon}
          height={imgHeight}
          width={imgWidht}
          alt="leaf"
          style={{ paddingTop: "40px", paddingLeft: "10px" , transform:`rotate(${imgRotate}deg)`}}
        />
      </div>
      <div>
        <button onClick={IncreaseHeight}> Increase Image Height</button>
        <button onClick={DecreaseHeight}>Decrease Image Height</button>
        <h2>`Current Height is {imgHeight} ` </h2>
      </div>
      <div>
        <button onClick={IncreaseWidth}> Increase Image Width</button>
        <button onClick={DecreaseWidth}>Decrease Image Width</button>
        <h2>`Current Width is {imgWidht} ` </h2>
      </div>

      <button onClick={changeBackground}>Change Backgroung</button>
      <button onClick={()=>{
        setImgRotate(imgRotate+30);
      }}>Rotate Image </button>
    </>
  );
};

export default ImageManipulation;
