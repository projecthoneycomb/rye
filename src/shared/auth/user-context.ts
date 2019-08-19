import React from 'react';

export interface IUserContext {
  isAuthenticated: boolean;
  auth?: {
    token?: string
  }
}

export const UserContext = React.createContext<IUserContext>({ isAuthenticated: false });