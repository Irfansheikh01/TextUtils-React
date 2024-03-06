import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('');
    
    const handleUpClick = () =>{
        setText(text.toUpperCase())
        props.showAlert('Success','Coverted to Uppercase')
    }
    const handleOnChange = (event) =>{
        setText(event.target.value)
    }
    const handleDownClick = () =>{
        setText(text.toLowerCase())
        props.showAlert('Success','Coverted to Lowercase')
    }
    const removeExtraSpaceClick = () =>{
        setText(text.split(' ').filter(s => s).join(' '))
        props.showAlert('Success','Extra spaces removed!')
    }
    const copyToClipboardClick = () =>{
        navigator.clipboard.writeText(text)
        props.showAlert('Success','Copied to clipboard')
    }
    const clearTextClick = () =>{
        setText('')
        props.showAlert('Success','Text cleared')
    }
    
    
  return (
    <>
    <div className='container' style={{color:props.mode === 'light' ? 'black' : 'White'}}>
        <h2 className='mb-2'>{props.heading}</h2>
        <div className="mb-2">
            <textarea className="form-control" style={{backgroundColor : props.mode === 'light' ? 'white':'#0a1838' , color:props.mode === 'light' ? 'black' : 'White'}}  value={text} onChange={handleOnChange} id="myBox" rows="5" placeholder='Enter text here..'></textarea>
        </div>
        <button disabled = {text.length === 0} type="button" className="btn btn-primary" onClick={handleUpClick}>Uppercase</button>
        <button disabled = {text.length === 0} type="button" className="btn btn-primary mx-2" onClick={handleDownClick}>Lowercase</button>
        <button disabled = {text.length === 0} type="button" className="btn btn-primary mx-2" onClick={removeExtraSpaceClick}>Remove Extra Spaces</button>
        <button disabled = {text.length === 0} type="button" className="btn btn-primary mx-2" onClick={copyToClipboardClick}>Copy text</button>
        <button disabled = {text.length === 0} type="button" className="btn btn-primary mx-2" onClick={clearTextClick}>Clear</button>
     </div>
     <div className="container my-3" style={{color:props.mode === 'light' ? 'black' : 'White'}}>
        <h3> Text Summary</h3>
        <p className="mx-3">{text.split(' ').filter(word => word !=='').length} words and {text.length} characters</p>
        <p className="mx-3">{(0.008 * text.split(' ').filter(word => word !=='').length).toFixed(3)} minutes to read.</p>
        <h3>Preview</h3>
        <p className="mx-3">{text.length > 0 ? text : 'Nothing to preview..'}</p>
     </div>
    </>
  )
}