import React, {Component} from 'react';
import Input from './Input';

class FormSection extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div className='form-section'>
        <Input type='text' handleChange={this.props.handleChange} id='name'/>
        <Input type='text' handleChange={this.props.handleChange} id='email'/>
        <Input type='text' handleChange={this.props.handleChange} id='phone'/>
      </div>
    )
  }
}

export default FormSection;