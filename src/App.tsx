import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

import { SecureRoute } from './shared/auth/secure-route';

import Header from './shared/header';
import Sidebar from './shared/sidebar';
import Button from './shared/button';
import Login from './shared/auth/login';
import Authorise from './shared/auth/authorise';

function Main(){
  return <div className="two-column-layout">
    <div className="container"></div>
    <Sidebar>
      <Button type="branded"></Button>
    </Sidebar>
  </div>
}

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Header></Header>
        <SecureRoute path="/" component={Main}></SecureRoute>
        <Route path="/login" component={Login}></Route>
        <Route path="/authorise" component={Authorise}></Route>
      </div>
    </Router>
  );
}

export default App;
