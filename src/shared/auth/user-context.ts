import React from 'react';

export interface IUserContext {
  isAuthenticated: boolean;
  auth?: {
    token?: string
  }
}

let defaultContext: IUserContext = { isAuthenticated: false };
let tokenFromLocalStorage = window.localStorage.getItem('token');

if (tokenFromLocalStorage) {
  defaultContext.isAuthenticated = true;
  defaultContext.auth = { token: tokenFromLocalStorage }
}

export const UserContext = React.createContext<IUserContext>(defaultContext);