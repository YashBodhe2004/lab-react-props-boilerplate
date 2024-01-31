import React from 'react';
import './App.css'

function App(props) {

  const images = props.images();

  return (
    <>
     <h1 id='heading'>Kalvium Gallery (Functional)</h1>
     <div id='image-container'>
      {images.map((e)=>(
        <img key={e.id} src={e.img} alt="" />
      ))}
     </div>
    </>
  )
}

export default App