import React from 'react';
import '../styles/Form.css';

function TextForm(props) {
  console.log(props)
  const {name, text} = props
  const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);

  return (
    <p name={name}>{capitalizedName}: {text}</p>
  )
}

export default TextForm;