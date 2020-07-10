import React, { createContext, useCallback } from 'react';
import api from '../services/api';

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContext {
  name: string;
  signIn(credentials: SignInCredentials): Promise<void>;
}

const Auth = createContext<AuthContext>({} as AuthContext);

const AuthProvider: React.FC = ({ children }) => {
  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('sessions', {
      email,
      password,
    });
    console.log(response.data);
  }, []);
  return <Auth.Provider value={{ name: '', signIn }}>{children}</Auth.Provider>;
};

export { Auth, AuthProvider };
