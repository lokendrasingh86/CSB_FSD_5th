// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Gallery from './components/gallery'
import ImageManipulation from './components/ImageManipulation'
import StateHandling from './components/StateHandling'

function App() {
  return (
    <div className='container' >
      {/* <h2>welcome to react vite</h2>
      <h3 style={{color: 'brown'}}>
        <Gallery/>
      </h3> */}
      {/* <StateHandling></StateHandling> */}
      <ImageManipulation></ImageManipulation>
    </div>
  )
}

export default App