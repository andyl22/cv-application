import React from "react";
import Input from "./Input";
import "../styles/FormSection.css";

function FormSection(props) {
  const mappedInputElements = props.inputs.map((inputData) => {
    const [inputType, inputName] = inputData;
    return <Input 
      id={inputName} 
      key={inputName} 
      type={inputType}
      onChange={props.onChange}
      />;
  });

  return <div className="form-section">{mappedInputElements}</div>;
}

export default FormSection;
