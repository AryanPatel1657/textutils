import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Textarea from "./components/Textarea";
import { useState } from "react";

function App() {

  const [mode,setmode] = useState("light");
  var x= document.getElementById('mybox');

  const changemode = ()=>{
    console.log("switch clicked");
    if(mode === 'dark'){
      setmode('light');
      document.body.style.backgroundColor ='white';
      
    }
    else {
      setmode('dark');
      document.body.style.backgroundColor ='#004e82';
      
    }
  }

  
  return (
    <>
  <Navbar titel="Text Tools" mode={mode} changemode={changemode} />
  <div className="container">
  <Textarea heading="Enter Your Text Here" mode={mode}/>
  </div>
  </>
  );
}

export default App;
