import React from 'react';
import './index.css';

interface IButtonProps {
  type?: string;
}

interface IButtonState {}

export default class Button extends React.Component<IButtonProps, IButtonState> {
  render() {
    return <button className={this.props.type}>
      
    </button>
  }
}