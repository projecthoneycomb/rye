import React from 'react';
import './index.css';

interface IButtonProps {
  type?: string;
  onClick?: Function;
}

interface IButtonState {}

export default class Button extends React.Component<IButtonProps, IButtonState> {

  handleClick() {
    const props = this.props || {};
    if(props.onClick) {
      props.onClick();
    }
  }

  render() {
    return <button onClick={() => this.handleClick()} className={this.props.type}></button>
  }
}