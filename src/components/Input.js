import React, {Component} from 'react';

class Input extends Component {

  render() {
    return <input type={this.props.type} id={this.props.id} onChange={(e) => this.props.handleChange(e, this.props)}/>
  }
}

export default Input;