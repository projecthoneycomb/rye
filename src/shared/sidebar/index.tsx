import React from 'react';
import './index.css';
import Button from '../button';
import { UserContext } from '../auth/user-context';
import { Redirect } from 'react-router';

export default class Sidebar extends React.Component {

  render() {
    return <UserContext.Consumer>
        {
          (user) => {
            return <div className="container">
              <h2>Welcome back <strong>{(user.profile || {}).firstName}</strong></h2>
              <p>I’ve got nothing to update you on since you last logged in.</p>
              <hr></hr>
              {this.props.children}
              <hr></hr>
              <Button onClick={() => user.logout()}></Button>
            </div>
          }
        }
      </UserContext.Consumer>
  }
}