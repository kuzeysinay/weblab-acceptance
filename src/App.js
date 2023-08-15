import React from "react";
import SignIn from './components/SignIn'
import SignUp from "./components/SignUp";
import Account from "./components/Account";
import { Route, Routes } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";


function App() {
  return (
    <div >
      <h1 className='text-center text-3xl font bold'>
        Firebase Auth & Context
      </h1>
      <AuthContextProvider>
        <Routes>
          <Route path='/' element={<SignIn/>} ></Route>
          <Route path='/sign-up' element={<SignUp/>} ></Route>
          <Route path='/account' element={<Account/>} ></Route>
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
