import React from 'react';
import '../styles/Input.css';

function Input(props) {
  const [name, type] = [props.id, props.type]
  const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);

  return (
    <div className='input-container'>
      <label htmlFor={name}>{capitalizedName}</label>
      <input 
        type={type} 
        name={name}
        onChange={props.onChange}
      />
      </div>
    )
}

export default Input;