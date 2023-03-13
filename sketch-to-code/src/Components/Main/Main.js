import React, { useState, useEffect } from 'react';
import './Main.css'; 
import * as tf from '@tensorflow/tfjs';
import {loadGraphModel} from '@tensorflow/tfjs-converter';


function Main() {
  const[selectedFile, setSelectedFile] = useState(null);
  const[preview, setPreview] = useState(null);
  const [model, setModel] = useState();

  const handleFile = (event) => {
    if(event.target.value) {
      setSelectedFile(event.target.files[0]);
    }
  }

  const handleConversion = async () => {
    const MODEL_URL = '../../../model/sketch-detector/tfjsexport/model.json';
    const model = await loadGraphModel(MODEL_URL);
    const image = document.getElementById('sketch-image');
    const values = model.predict(tf.browser.fromPixels) 
    console.log("Values: " + values);
  }

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
            <img src={preview} alt="Your image" id="sketch-image"/>
            <button onClick={handleConversion}>Start Conversion</button>
          </div>
        )}
    </div>
  )
}

export default Main