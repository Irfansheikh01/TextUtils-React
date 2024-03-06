import './App.css';
import Alert from './Components/Alert';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
    const[mode, setMode] = useState('light')
    const[alert, setAlert] = useState(null)
    
    const showAlert = (type, msg) => {
      setAlert({
        type:type,
        msg:msg
      })
      setTimeout(() => {
        setAlert(null)
      }, 1500);
    }

    const toggleMode = ()=>{
        if(mode === 'light'){
         setMode('dark') 
         document.body.style.backgroundColor = '#252F44'
         showAlert('Success','Dark Mode Enabled')
        }else{
          setMode('light')
          document.body.style.backgroundColor = 'white'
          showAlert('Success','Dark Mode Disabled')
      }
    }

  return (
    <>
    <Router>
      <Navbar title="TextUtils" mode = {mode} toggleMode = {toggleMode} />
      <Alert alert = {alert}/>

      <div className="container my-3">
        <Routes>
          <Route path="/about" element = {<About />}></Route>
          <Route path="/" element = {<TextForm heading = "TextUtils - Analyze your text" mode = {mode}  showAlert={showAlert}/>}></Route>
          </Routes>
      </div>
      
    </Router>
    </>
  );
}

export default App;
