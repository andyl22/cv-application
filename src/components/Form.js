import React, {Component} from 'react';
import FormSection from './FormSection';
import '../styles/Form.css'

class Form extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      name: '',
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state)
  }

  handleChange(e, props) {
    const keyToModify = props.id;
    const updatedArray = {...this.state, [keyToModify]: e.target.value};
    this.setState(
      updatedArray
    );
  }

  render() {
    const firstSection = [['text', 'name'], ['text', 'email'], ['text', 'phone']];
    const secondSection = [['text', 'name2'], ['text', 'email2'], ['text', 'phone2']];
    const thirdSection = [['text', 'name3'], ['text', 'email3'], ['text', 'phone3']];
    return (
      <div className='form-container'>
        <h1>CV Application</h1>
        <form className='full-form' onSubmit={this.handleSubmit}>
          <FormSection handleChange={this.handleChange} inputs={firstSection}></FormSection>
          <FormSection handleChange={this.handleChange} inputs={secondSection}></FormSection>
          <FormSection handleChange={this.handleChange} inputs={thirdSection}></FormSection>
          <input type='submit'/>
        </form>
      </div>
    )
  }
}

export default Form;