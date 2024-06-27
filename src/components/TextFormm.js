import React,{useState} from 'react'

export default function TextFormm(props) {
    const handleUpClick=()=>{
        // console.log("Uppercase was clicked",+text);
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase","success");
    }
    const handleLowClick=()=>{
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase","success");
    }
    const handleClearClick=()=>{
        let newText='';
        setText(newText);
        props.showAlert("Text cleared","danger");
    }
    const handleCapitalizedClick=()=>{
        let newText=text
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
        setText(newText);    
        props.showAlert("Converted to Capitalized format","success");  
    }
    const handleExtraSpace=()=>{
        let newText=text
        .split(/[ ]+/)
        .join(" ");
        setText(newText);     
        props.showAlert("Extra Space removed","primary"); 
    }
    const handleCopy=()=>{
        var text=document.getElementById("myBox");
        text.select();
        text.setSelectionRange(0,9999);
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to Clipboard","primary")
    }
    const handleBackToOriginal=()=>{
        setText(originalText);      
    }
    const handleOnChange=(event)=>{
        setOriginalText(event.target.value);
        setText(event.target.value);
    }
    const [text, setText]= useState(''); 
    const [originalText, setOriginalText] = useState('');
    
  return (
    <>
    <div className='container'>
        <h1>{props.heading}</h1>
        <div className="mb-3">
  
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary ms-2" onClick={handleLowClick}>Convert to LowerCase</button>
        <button className="btn btn-primary ms-2" onClick={handleCapitalizedClick}>Convert to Capitalized Case</button>
        <button className="btn btn-primary ms-2" onClick={handleExtraSpace}>Handle Extra Space</button>
        <button className="btn btn-primary ms-2" onClick={handleBackToOriginal}>Back to Original</button>
        <button className="btn btn-primary ms-2" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary ms-2" onClick={handleClearClick}>Clear Text</button>
    </div>
    <div className="container my-2">
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>Minutes to read : {0.008*text.split(" ").length}</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}