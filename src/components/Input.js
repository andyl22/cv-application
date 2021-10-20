import React, {Component} from 'react';
import '../styles/Input.css';

class Input extends Component {

  render() {
    return (
      <div className='input-container'>
        <label htmlFor={this.props.id}>{this.props.id}</label>
        <input type={this.props.type} id={this.props.id} onChange={(e) => this.props.handleChange(e, this.props)}/>
      </div>
    )
  }
}

export default Input;