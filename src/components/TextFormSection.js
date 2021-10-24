import React from 'react';
import '../styles/FormSection.css';
import TextForm from './TextForm';

function TextFormSection(props) {

  const data = props.data
  
  const mappedData = Object.keys(data).map(key => {
    return (key !== 'submitted' && <TextForm name={key} key={key} text={data[key]} />)
  })

  return (
    <div className='form-container'>
      <h1>CV Application</h1>
      {mappedData}
    </div>
  )
}

export default TextFormSection;