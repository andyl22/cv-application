import React, {Component} from 'react';
import Input from './Input';
import '../styles/FormSection.css'

class FormSection extends Component {

  render() {
    const mappedInputElements = this.props.inputs.map(
      inputData => <Input key={inputData[1]} type={inputData[0]} handleChange={this.props.handleChange} id={inputData[1]} ></Input>
      );

    return (
      <div className='form-section'>
        {mappedInputElements}
      </div>
    )
  }
}

export default FormSection;