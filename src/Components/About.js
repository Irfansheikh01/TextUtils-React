import React from 'react'

export default function About(props) {
  let accordianStyle = {
    backgroundColor : props.mode === 'light' ? 'white':'#252F44' , 
    color:props.mode === 'light' ? 'black' : 'White'
  }
  return (
    
      <div className="container" style={accordianStyle}>
        <h2 className='my-3'>About Us</h2>
      <div className="accordion" id="accordionExample">
  <div className="accordion-item" style={accordianStyle}>
    <h2 className="accordion-header">
      <button className="accordion-button" style={accordianStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne"> 
        <strong>Analyze your text</strong>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        TextUtils gives you a way to analyze your text quickly and efficiently. Be it a word count, a character count or time to read the text.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={accordianStyle}>
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={accordianStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      <strong>Free to use</strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        TextUtils is a free character counter tool that provides instant character count and word count for a give text. TextUtils reports the number of words and characters.
        So, TextUtils is suitable for writing a text or paragraph with word-character limit.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={accordianStyle}>
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={accordianStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      <strong>Brower Compatible</strong>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        This word counter software works in any web brower such as Chrome, Firefox, Safari, Internet Explorer, etc. It can be used to count characters in facebook, blogs, books, excel document, pdf, essays, etc.
      </div>
    </div>
  </div>
</div>
      </div>
    
  )
}