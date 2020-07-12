import React from 'react';
import SignIn from './pages/SignIn';
// import SignUp from './pages/SignUp';
import ToastContainer from './components/ToastContainer';
import AppProvider from './hooks';

import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <>
    <AppProvider>
      <SignIn />
      {/* <SignUp /> */}
    </AppProvider>

    <ToastContainer />
    <GlobalStyle />
  </>
);

export default App;
