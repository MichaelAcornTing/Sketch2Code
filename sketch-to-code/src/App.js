import './App.css';
import { Routes, Route, Link } from 'react-router-dom';

// Pages 
import Home from './Components/Home/Home';
import Tutorial from './Components/Tutorial/Tutorial'; 
import Main from './Components/Main/Main'; 
import Tags from './Components/Tags/Tags';
import SketchExamples from './Components/SketchExamples/SketchExamples';
 


function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tutorial" element={<Tutorial />} />
        <Route path="/main" element={<Main />} />
        <Route path="/tags" element={<Tags />} />
        <Route path="/sketch-examples" element={<SketchExamples />} />
      </Routes>
  );
}

export default App;
