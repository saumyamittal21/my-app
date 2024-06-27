import React, { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextFormm from './components/TextFormm';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";
 
function App() {
  const [mode, setMode]=useState('light');
  const [alert, setAlert]=useState(null);

  const showAlert=(message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    },2000);
  }

  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='black';
      document.body.style.color='white';
      showAlert("Dark mode has been enabled","success");
      document.title="TextUtils - Dark Mode";
    }
    if(mode==='dark'){
      setMode('light');
      document.body.style.backgroundColor='white';
      document.body.style.color='black';
      showAlert("Light mode has been enabled","success");
      document.title="TextUtils - Light Mode";
    }
  }
  return (
    <>
  {/* <Router> */}
  <Navbar title="TextUtils" aboutText="About Utils" mode={mode} toggleMode={toggleMode}/>
  <Alert alert={alert}/>
  <div className="container my-3">
  {/* <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/" element={<TextFormm showAlert={showAlert} heading="Enter the text to be analyzed below" />} />
          </Routes> */}
    <TextFormm showAlert={showAlert} heading="Enter the text to be analyzed below" />
  </div>
  {/* </Router> */}
  {/* <About/> */}
  
  
    </>
  );
}

export default App;
