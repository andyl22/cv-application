import React, { useState } from 'react';
import '../styles/Input.css';

function Input(props) {


  return (
    <div className='input-container'>
      <label htmlFor={props.id}>{props.id}</label>
      <input 
        type={props.type} 
        name={props.id}
        onChange={props.onChange}
      />
      </div>
    )
}

export default Input;