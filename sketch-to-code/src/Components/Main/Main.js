import React, { useState, useEffect } from 'react';
import './Main.css'; 


function Main() {
  const[selectedFile, setSelectedFile] = useState(null);
  const[preview, setPreview] = useState(null);

  const handleFile = (event) => {
    if(event.target.value) {
      setSelectedFile(event.target.files[0]);
    }
  }

  const handleConversion = () => {}

  useEffect(() => {
    if(!selectedFile) {
      setPreview(null);
    } else {
      const objURL = URL.createObjectURL(selectedFile);
      setPreview(objURL);

      return () => URL.revokeObjectURL(objURL);
    }
  }, [selectedFile])

  return (
    <div className='Main'>
        <h1>Main</h1>
        <h3>
        <label for="sketch-file">Choose a JPEG file:  </label>
        </h3>
        <input type="file" accept='.jpg' id='sketch-file' onChange={handleFile}/>
        {preview && (
          <div className='ready'>
            <img src={preview} alt="Your image"/>
            <button onClick={handleConversion}>Start Conversion</button>
          </div>
        )}
    </div>
  )
}

export default Main