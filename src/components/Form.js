import React, { useState } from "react";
import FormSection from "./FormSection";
import "../styles/Form.css";

function Form(props) {
  const firstSection = [
    ["text", "name"],
    ["text", "email"],
    ["text", "phone"],
  ];
  const secondSection = [
    ["text", "name2"],
    ["text", "email2"],
    ["text", "phone2"],
  ];
  const thirdSection = [
    ["text", "name3"],
    ["text", "email3"],
    ["text", "phone3"],
  ];

  return (
    <div className="form-container">
      <h1>CV Application</h1>
      <form className="full-form" onSubmit={props.handleSubmit}>
        <FormSection
          inputs={firstSection}
          onChange={props.onChange}
        />
        <FormSection
          inputs={secondSection}
          onChange={props.onChange}
        />
        <FormSection
          inputs={thirdSection}
          onChange={props.onChange}
        />
        <input type="submit" />
      </form>
    </div>
  );
}

export default Form;
