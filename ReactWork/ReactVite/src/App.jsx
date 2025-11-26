// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
// import Gallery from './components/gallery'
// import ImageManipulation from './components/ImageManipulation'
// import StateHandling from './components/StateHandling'

import {BrowserRouter,Routes,Route} from "react-router-dom";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Dashboard from "./pages/Dashboard";
import Mainlayout from "./pages/Mainlayout";
import { useState } from "react";

function App() {
   const [data,setData] = useState();
  return (
    <>
   
      {/*<div className='container' >
       <h2>welcome to react vite</h2>
      <h3 style={{color: 'brown'}}>
        <Gallery/>
      </h3> 
       <StateHandling></StateHandling> 
       <ImageManipulation></ImageManipulation> 
    </div> */}

      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login logData={data} />}></Route>
          <Route path="/registration" element={<Registration regData={setData}/> }></Route>
          <Route path="/dashboard" element={<Dashboard/>}></Route>
          <Route path="/" element={<Mainlayout/>}></Route>
        </Routes>
      </BrowserRouter>
      <h2>{JSON.stringify(data)}</h2>
    </>
  );
}

export default App;
