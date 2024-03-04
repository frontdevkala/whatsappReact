import React from 'react';
import { Route, Routes} from 'react-router-dom';
import './App.css';
import AppHeader from './Layout/AppHeader/AppHeader';
import AppFooter from './Layout/AppFooter/AppFooter';
import Main from './Layout/Main/Main';
import LoginForm from './Authorization/Login';
import Register from './Authorization/Register/Register';

const App = () => {
  return (
    <div className="App">
      <div>
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route path='/register' element={<Register/>}/>
          <Route path="/*" element={<MainWithHeaderAndFooter />} />
        </Routes>
      </div>
    </div>
  );
};

// Component for rendering Main with header and footer
const MainWithHeaderAndFooter = () => {
  return (
    <>
      <AppHeader />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
      <AppFooter />
    </>
  );
};

export default App;
