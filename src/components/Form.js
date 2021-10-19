import React, {Component} from 'react';
import FormSection from './FormSection';

class Form extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      name: '',
      email: '',
      phone: '',
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state)
  }

  handleChange(e, props) {
    const keyToModify = props.id;
    const updatedArray = {...this.state, [keyToModify]: e.target.value}
    this.setState(
      updatedArray
    )
  }

  render() {
    return (
      <form className='full-form' onSubmit={this.handleSubmit}>
        <FormSection handleChange={this.handleChange}></FormSection>
        <FormSection handleChange={this.handleChange}></FormSection>
        <FormSection handleChange={this.handleChange}></FormSection>
        <input type='submit'/>
      </form>
    )
  }
}

export default Form;