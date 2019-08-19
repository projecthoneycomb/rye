import React from 'react';
import './index.css';
import Button from '../button';

export default class Sidebar extends React.Component {
  render() {
    return <div className="container">
      <h2>Welcome back <strong>Rob</strong></h2>
      <p>I’ve got nothing to update you on since you last logged in.</p>
      <hr></hr>
      {this.props.children}
      <hr></hr>
      <Button></Button>
      </div>
  }
}