import React, { Component } from 'react'

export class Square extends Component {

    render(props) {
    return (
      <button className="square" onClick={this.props.onClick}>
        {this.props.value}
      </button>
    );
  }
}

export default Square
