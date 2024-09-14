import React, { useState } from 'react'


export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked", text);
    const newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase", "success");
  }
  const handleLowClick = () => {
    const newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase", "success");
  }
  const handleEraseClick = () => {
    setText("");
  }
  const handleCopyClick = () => {
    navigator.clipboard.writeText(text);
    // alert("text copied")
    props.showAlert("Text Copied to Clipboard", "success");

  }
  const handleExtraSpacesClick = () => {
    const newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  }

  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value);
  }

  const [text, setText] = useState("");
  return (
    <>
    <div className='conatiner' style = {{color : props.mode==='dark'?'white':'black'}}>
      <h2>{props.heading}</h2>
      <div className="mb-3">
        <textarea className="form-control" style = {{backgroundColor: props.color, color : props.mode==='dark'? 'white':'black'}} value = {text} onChange = {handleOnChange} id="myBox" rows= "8"></textarea>
      </div>

      <button disabled={text.length===0} className="btn mx-1 my-1 my-1" style = {{backgroundColor: props.Dcolor, color : props.mode==='dark'? 'white':'black'}} onClick={handleEraseClick}>Erase Text</button>

      <button disabled={text.length===0} className="btn mx-1 my-1 my-1" style = {{backgroundColor: props.Dcolor, color : props.mode==='dark'? 'white':'black'}} onClick={handleUpClick}>Convert to Uppercase</button>

      <button disabled={text.length===0} className="btn mx-1 my-1 my-1" style = {{backgroundColor: props.Dcolor, color : props.mode==='dark'? 'white':'black'}} onClick={handleLowClick}>Convert to Lowercase</button>

      <button disabled={text.length===0} className="btn mx-1 my-1 my-1" style = {{backgroundColor: props.Dcolor, color : props.mode==='dark'? 'white':'black'}} onClick={handleExtraSpacesClick}>Remove Extra Spaces</button>

      <button disabled={text.length===0} className="btn mx-1 my-1 my-1" style = {{backgroundColor: props.Dcolor, color : props.mode==='dark'? 'white':'black'}} onClick={handleCopyClick}>Copy Text</button>

    </div>

    <div className="container my-3"  style = {{color : props.mode==='dark'? 'white' :'black'}}>
      <h2>Your text summary</h2>

      <p>{text.split(" ").filter((element)=> {return element.length!==0}).length} Words and {text.length} Characters</p>

      <p>{0.008*text.split(" ").filter((element)=> {return element.length!==0}).length} Minutes to read</p>

      <h2>Preview</h2>
      <p>{text.length===0? 'Nothing to preview':text}</p>
    </div>
    </>
  )
}
