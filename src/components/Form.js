import React from "react";
import FormSection from "./FormSection";
import "../styles/Form.css";

function Form(props) {
  const firstSection = [
    ["text", "name"],
    ["text", "email"],
    ["text", "phone"],
  ];
  const secondSection = [
    ["text", "job"],
    ["text", "current company"],
    ["text", "years of employment"],
  ];
  const thirdSection = [
    ["text", "technical skills"],
    ["text", "soft skills"],
    ["text", "languages"],
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
