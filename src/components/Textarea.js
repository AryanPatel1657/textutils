import React, { useState } from "react";

export default function Textarea(props) {
  const [text, setText] = useState("");

  const makeuppercase = () => {
    let newText =text.toUpperCase();
    setText(newText);
  };
  const makelocase = () => {
    let newText =text.toLowerCase();
    setText(newText);
  };
  const handelonchange = (event) => {
    setText(event.target.value);
  };
  const cleartext = () => {
    setText("");
  };
  const copytext =()=>{
    navigator.clipboard.writeText(text);
  }
  
  return (
    <>
      <div className="my-5" style={{color: props.mode === 'light'? 'black':'white'}}>
        <h1>{props.heading}</h1>
        <textarea className="form-control" value={text} id="mybox" style={{background:props.mode === 'light'? 'white':'grey',color:props.mode === 'light'? 'black':'white',cursor:'pointer'}}  onChange={handelonchange} rows="8"></textarea>
        <button className="btn btn-primary my-3 mx-1" onClick={makeuppercase}>uppercase</button>
        <button className="btn btn-primary my-3 mx-1" onClick={makelocase}>lowercase</button>
        <button className="btn btn-primary my-3 mx-1" onClick={cleartext}>clear</button>
        <button className="btn btn-primary my-3 mx-1" onClick={copytext}>copy</button>

      </div>
      <div style={{color: props.mode === 'light'? 'black':'white'}}>
        <h1>Summary</h1>
        <p>{text.split(" ").length } words and {text.length} charactors</p>
            <p> {0.008 * (text.split(" ").length) } minutes to read</p>
      </div>
    </>
  );
}
