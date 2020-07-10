import React, { createContext, useCallback } from 'react';

interface AuthContext {
  name: string;
  signIn(): void;
}

const Auth = createContext<AuthContext>({} as AuthContext);

const AuthProvider: React.FC = ({ children }) => {
  const signIn = useCallback(() => {
    console.log('log in');
  }, []);
  return <Auth.Provider value={{ name: '', signIn }}>{children}</Auth.Provider>;
};

export { Auth, AuthProvider };
